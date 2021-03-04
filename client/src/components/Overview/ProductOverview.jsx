import React from 'react';
import PropTypes from 'prop-types';
import Features from './Features.jsx';

const ProductOverview = ({ productInfo }) => (
  <div>
    <div>{productInfo.slogan}</div>
    <div>{productInfo.description}</div>
    <Features productInfo={productInfo} />
  </div>
);

ProductOverview.defaultProps = {
  productInfo: {},
};

ProductOverview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
};

export default ProductOverview;
