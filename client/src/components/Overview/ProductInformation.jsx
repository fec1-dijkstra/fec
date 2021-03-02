import React from 'react';
import PropTypes from 'prop-types';

const ProductInformation = ({ productInfo }) => (
  <div>
    <div>Star Rating...</div>
    <div>{productInfo.category}</div>
    <div>{productInfo.name}</div>
    <div>{productInfo.default_price}</div>
  </div>
);

ProductInformation.defaultProps = {
  productInfo: {},
};

ProductInformation.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ProductInformation;
