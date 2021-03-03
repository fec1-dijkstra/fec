import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';
import Stars from '../Stars.jsx';

const ProductInformation = ({ productInfo, productStyles }) => (
  <>
    <Stars productId={productInfo.id} />
    <div>{productInfo.category}</div>
    <div>{productInfo.name}</div>

    <StyleSelector productStyles={productStyles} />
  </>
);

ProductInformation.defaultProps = {
  productInfo: {},
  productStyles: {},
};

ProductInformation.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.object]),
};

export default ProductInformation;
