import React from 'react';
import PropTypes from 'prop-types';

import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductOverview from './ProductOverview.jsx';
import SocialShare from './SocialShare.jsx';

const Overview = ({ productInfo, productStyles }) => {
  if (productInfo.id) {
    return (
      <>
        <div>This is the overview component!</div>
        <ImageGallery />
        <ProductInformation productInfo={productInfo} productStyles={productStyles} />
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
};

Overview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.object]),
};

export default Overview;
