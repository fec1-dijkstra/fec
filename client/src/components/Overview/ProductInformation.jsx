import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';
import Reviews from './Reviews.jsx';

const ProductInformation = ({ productInfo, productStyles, reviewsMeta }) => (
  <>
    <Reviews productInfo={productInfo} reviewsMeta={reviewsMeta} />
    <div>{productInfo.category}</div>
    <div>{productInfo.name}</div>

    <StyleSelector productStyles={productStyles} />
  </>
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
