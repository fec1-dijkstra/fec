import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';
import Reviews from './Reviews.jsx';

const ProductInformation = ({ productInfo, productStyles, reviewsMeta }) => (
  <div className="overview-product-information">
    <Reviews productInfo={productInfo} reviewsMeta={reviewsMeta} />
    <div id="overview-category">{productInfo.category}</div>
    <div id="overview-name">{productInfo.name}</div>

    <StyleSelector productStyles={productStyles} productInfo={productInfo} />
  </div>
);

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
