import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart.jsx';
import Styles from './Styles.jsx';
import ImageGallery from './ImageGallery.jsx';

class StyleSelector extends React.Component {
  static setPrice(selectedStyle) {
    if (selectedStyle.sale_price) {
      return (
        <>
          <div id="overview-price-slash">{selectedStyle.original_price}</div>
          <div id="overview-sale-price">{selectedStyle.sale_price}</div>
        </>
      );
    }
    return <div id="overview-price">{selectedStyle.original_price}</div>;
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.findDefaultStyle();
  }

  // componentDidUpdate(prevProps) {
  //   const { productStyles } = this.props;
  //   if (prevProps.productStyles.results !== productStyles.results) {
  //     this.findDefaultStyle();
  //   }
  // }

  handleClick(event) {
    const { productStyles } = this.props;
    let { selectedStyle } = this.state;
    if (Number(event.target.value) !== selectedStyle.style_id) {
      selectedStyle = productStyles.results.find(
        (style) => style.style_id === Number(event.target.value)
      );
      return this.setState({ selectedStyle });
    }
    return undefined;
  }

  findDefaultStyle() {
    const { productStyles } = this.props;
    if (productStyles.results && productStyles.results.length > 0) {
      const selectedStyle = productStyles.results.find((style) => style[`default?`] === true);
      return this.setState({ selectedStyle });
    }
    return undefined;
  }

  render() {
    const { selectedStyle } = this.state;
    const { productInfo, productStyles } = this.props;
    if (selectedStyle.name) {
      return (
        <>
          <ImageGallery selectedStyle={selectedStyle} />
          {StyleSelector.setPrice(selectedStyle)}
          <div id="overview-style-name">
            Style <b>{'>'}</b> {selectedStyle.name}
          </div>
          <Styles
            productStyles={productStyles}
            selectedStyle={selectedStyle}
            handleClick={this.handleClick}
          />
          <AddToCart selectedStyle={selectedStyle} productInfo={productInfo} />
        </>
      );
    }
    return <></>;
  }
}

StyleSelector.defaultProps = {
  productStyles: {},
  productInfo: {},
};

StyleSelector.propTypes = {
  productStyles: PropTypes.oneOfType([PropTypes.object]),
  productInfo: PropTypes.oneOfType([PropTypes.object]),
};

export default StyleSelector;
