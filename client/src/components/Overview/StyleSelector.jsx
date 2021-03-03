import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart.jsx';

class StyleSelector extends React.Component {
  static salePrice(selectedStyle) {
    if (selectedStyle.sale_price) {
      return (
        <>
          <div className="OriginalPrice">{selectedStyle.original_price}</div>
          <div className="SalePrice">{selectedStyle.sale_price}</div>
        </>
      );
    }
    return <div>{selectedStyle.original_price}</div>;
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: {},
    };
  }

  componentDidMount() {
    this.findDefaultStyle();
  }

  componentDidUpdate(prevProps) {
    const { productStyles } = this.props;
    if (prevProps.productStyles.results !== productStyles.results) {
      this.findDefaultStyle();
    }
  }

  findDefaultStyle() {
    const { productStyles } = this.props;
    if (productStyles.results && productStyles.results.length > 0) {
      const selectedStyle = productStyles.results.find((style) => style[`default?`] === true);
      return this.setState({ selectedStyle });
    }
    return {};
  }

  render() {
    const { selectedStyle } = this.state;
    return (
      <>
        {StyleSelector.salePrice(selectedStyle)}
        <div>
          Style `{'>'}` {selectedStyle.name}
        </div>
        <div>Thumbnails...</div>
        <AddToCart selectedStyle={selectedStyle} />
      </>
    );
  }
}

StyleSelector.defaultProps = {
  productStyles: {},
};

StyleSelector.propTypes = {
  productStyles: PropTypes.oneOfType([PropTypes.object]),
};

export default StyleSelector;
