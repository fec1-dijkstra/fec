import React from 'react';
import PropTypes from 'prop-types';

import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductOverview from './ProductOverview.jsx';
import SocialShare from './SocialShare.jsx';

const Overview = ({ productInfo, productStyles, reviewsMeta }) => {
  if (productInfo.id) {
    return (
      <>
        <ImageGallery />
        <ProductInformation
          productInfo={productInfo}
          productStyles={productStyles}
          reviewsMeta={reviewsMeta}
        />
        <SocialShare />
        <ProductOverview productInfo={productInfo} />
      </>
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
