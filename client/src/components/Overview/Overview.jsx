import React from 'react';
import PropTypes from 'prop-types';

import ProductInformation from './ProductInformation.jsx';
import ProductOverview from './ProductOverview.jsx';

const Overview = ({ productInfo, productStyles, reviewsMeta, handleProductChange }) => {
  const header = (
    <div className="overview-header">
      <h1>DIJKSTRA</h1>
      <div className="overview-search">
        <input type="text" id="overview-search-field" /> 🔍
      </div>
    </div>
  );
  const productHighlight = () => {
    handleProductChange(17071);
  };
  if (productInfo.id) {
    return (
      <div className="overview-wrapper">
        {header}
        <div className="overview-announcement">
          <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> – SALE / DISCOUNT <b>OFFER</b> –{' '}
          <button type="button" id="overview-new-product-highlight" onClick={productHighlight}>
            NEW PRODUCT HIGHLIGHT
          </button>
        </div>
        <div className="overview-component">
          <div className="overview-product-wrapper">
            <div className="overview-gallery-protection" />
            <div className="overview-product">
              <ProductInformation
                productInfo={productInfo}
                productStyles={productStyles}
                reviewsMeta={reviewsMeta}
              />
            </div>
          </div>
          <div className="overview-overview">
            <ProductOverview productInfo={productInfo} />
          </div>
        </div>
      </div>
    );
  }
  return <>{header}</>;
};

Overview.defaultProps = {
  productInfo: {},
  productStyles: {},
  reviewsMeta: {},
  handleProductChange: (event) => event,
};

Overview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.object]),
  reviewsMeta: PropTypes.oneOfType([PropTypes.object]),
  handleProductChange: PropTypes.func,
};

export default Overview;
