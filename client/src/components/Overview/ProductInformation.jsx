import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';
import Reviews from './Reviews.jsx';

const ProductInformation = ({ productInfo, productStyles, reviewsMeta }) => (
  <>
    <Reviews productInfo={productInfo} reviewsMeta={reviewsMeta} />
    <div>{productInfo.category}</div>
    <div>{productInfo.name}</div>

<<<<<<< HEAD
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
    // console.log(productInfo)
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
=======
    <StyleSelector productStyles={productStyles} />
  </>
);
>>>>>>> eed5345b28c12b44b5f20bec9d3ee907ffa05f9c

ProductInformation.defaultProps = {
  productInfo: {},
  productStyles: {},
  reviewsMeta: {},
};

ProductInformation.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.object]),
  reviewsMeta: PropTypes.oneOfType([PropTypes.object]),
};

export default ProductInformation;
