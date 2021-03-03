import React from 'react';
import PropTypes from 'prop-types';
import Features from './Features.jsx';

const ProductOverview = ({ productInfo }) => {
  const hasSlogan = () => {
    if (productInfo.slogan) {
      return <div>{productInfo.slogan}</div>;
    }
    return <></>;
  };
  const hasDescription = () => {
    if (productInfo.description) {
      return <div>{productInfo.description}</div>;
    }
    return <></>;
  };
  const hasFeatures = () => {
    if (productInfo.features) {
      return <Features productInfo={productInfo} />;
    }
    return <></>;
  };
  return (
    <>
      {hasSlogan()}
      {hasDescription()}
      {hasFeatures()}
    </>
  );
};

ProductOverview.defaultProps = {
  productInfo: {},
};

ProductOverview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
};

export default ProductOverview;
