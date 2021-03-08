import React from 'react';
import PropTypes from 'prop-types';

import ProductInformation from './ProductInformation.jsx';
import ProductOverview from './ProductOverview.jsx';

const Overview = ({ productInfo, productStyles, reviewsMeta }) => {
  if (productInfo.id) {
    return (
      <div className="overview-wrapper">
        <div className="overview-component">
          <div className="overview-product">
            <ProductInformation
              productInfo={productInfo}
              productStyles={productStyles}
              reviewsMeta={reviewsMeta}
            />
          </div>
          <div className="overview-overview">
            <ProductOverview productInfo={productInfo} />
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

Overview.defaultProps = {
  productInfo: {},
  productStyles: {},
  reviewsMeta: {},
};

Overview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.object]),
  reviewsMeta: PropTypes.oneOfType([PropTypes.object]),
};

export default Overview;
