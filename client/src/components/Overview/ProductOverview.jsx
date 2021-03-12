import React from 'react';
import PropTypes from 'prop-types';
import Features from './Features.jsx';

const ProductOverview = ({ productInfo }) => {
  const hasSlogan = () => {
    if (productInfo.slogan) {
      return <div id="overview-slogan">{productInfo.slogan}</div>;
    }
    return <></>;
  };
  const hasDescription = () => {
    if (productInfo.description) {
      return <div id="overview-description">{productInfo.description}</div>;
    }
    return <></>;
  };
  const hasFeatures = () => {
    if (productInfo.features) {
      return (
        <div className="overview-features">
          <div className="overview-all-features">
            <Features productInfo={productInfo} />
          </div>
        </div>
      );
    }
    return <></>;
  };
  return (
    <div className="overview-product-overview">
      <div className="overview-product-overview-main">
        {hasSlogan()}
        {hasDescription()}
      </div>
      {hasFeatures()}
    </div>
  );
};

ProductOverview.defaultProps = {
  productInfo: {},
};

ProductOverview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
};

export default ProductOverview;
