import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';

const ProductInformation = ({ productInfo, productStyles }) => (
  <>
    <div>Star Rating...</div>
    <div>{productInfo.category}</div>
    <div>{productInfo.name}</div>
    <div>{productInfo.default_price}</div>

    <StyleSelector productStyles={productStyles} />
  </>
);

ProductInformation.defaultProps = {
  productInfo: {},
  productStyles: {},
};

ProductInformation.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ProductInformation;
