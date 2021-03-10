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
          <div id="overview-price-slash">{`$${selectedStyle.original_price}`}</div>
          <div id="overview-sale-price">{`$${selectedStyle.sale_price}`}</div>
        </>
      );
    }
    if (selectedStyle.original_price === 'NO LONGER AVAILABLE') {
      return <div id="overview-price">{`${selectedStyle.original_price}`}</div>;
    }
    return <div id="overview-price">{`$${selectedStyle.original_price}`}</div>;
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: {},
      defaultStyle: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.findDefaultStyle();
  }

  componentDidUpdate(prevProps) {
    const { productStyles } = this.props;
    if (prevProps.productStyles.product_id !== productStyles.product_id) {
      this.findDefaultStyle();
    }
  }

  handleClick(event) {
    const { productStyles } = this.props;
    let { selectedStyle } = this.state;
    if (selectedStyle.style_id) {
      if (Number(event.target.id) !== selectedStyle.style_id) {
        selectedStyle = productStyles.results.find(
          (style) => style.style_id === Number(event.target.id)
        );
        if (selectedStyle) {
          return this.setState({ selectedStyle });
        }
      }
    }
    return undefined;
  }

  findDefaultStyle() {
    const { productStyles } = this.props;
    if (productStyles.results && productStyles.results.length > 0) {
      let selectedStyle = productStyles.results.find((style) => style[`default?`] === true);
      if (!selectedStyle) {
        if (productStyles.results[0]) {
          [selectedStyle] = productStyles.results;
        } else {
          selectedStyle = {
            'default?': true,
            name: 'NONE',
            original_price: 'NO LONGER AVAILABLE',
            photos: [],
            sale_price: null,
            skus: {},
            style_id: 0,
          };
        }
      }
      return this.setState({ selectedStyle, defaultStyle: selectedStyle });
    }
    return undefined;
  }

  render() {
    const { selectedStyle, defaultStyle } = this.state;
    const { productInfo, productStyles } = this.props;
    if (selectedStyle.name) {
      return (
        <div className="overview-style-selector">
          <ImageGallery selectedStyle={selectedStyle} />
          <div className="overview-style-section">
            <div className="overview-price">{StyleSelector.setPrice(selectedStyle)}</div>
            <div id="overview-style-name">
              <b>Style {'>'}</b> {selectedStyle.name}
            </div>
            <div className="overview-style-icon-area">
              <Styles
                productStyles={productStyles}
                defaultStyle={defaultStyle}
                selectedStyle={selectedStyle}
                handleClick={this.handleClick}
              />
            </div>
            <AddToCart selectedStyle={selectedStyle} productInfo={productInfo} />
          </div>
        </div>
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
