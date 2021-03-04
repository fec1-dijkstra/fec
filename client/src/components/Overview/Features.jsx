import React from 'react';
import PropTypes from 'prop-types';

const Features = ({ productInfo }) => {
  let key = 0;
  if (productInfo.features && productInfo.features.length > 0) {
    return productInfo.features.map((feature) => {
      key += 1;
      return <div key={key}>{feature.feature}</div>;
    });
  }
  return <div />;
};

Features.defaultProps = {
  productInfo: {},
};

Features.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
};

export default Features;
