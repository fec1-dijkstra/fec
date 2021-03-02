import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productStyles.results !== this.props.productStyles.results) {
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
    const { productInfo } = this.props;
    const { selectedStyle } = this.state;
    console.log(productInfo)
    return (
      <div>
        <div>Star Rating...</div>
        <div>{productInfo.category}</div>
        <div>{productInfo.name}</div>
        <div>{productInfo.default_price}</div>
        <div>
          Style `{'>'}` {selectedStyle.name}
        </div>
        <StyleSelector productStyles={selectedStyle} />
      </div>
    );
  }
}

ProductInformation.defaultProps = {
  productInfo: {},
  productStyles: {},
};

ProductInformation.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ProductInformation;
