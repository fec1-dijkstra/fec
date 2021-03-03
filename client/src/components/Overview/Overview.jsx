import React from 'react';
import PropTypes from 'prop-types';

import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductOverview from './ProductOverview.jsx';
import SocialShare from './SocialShare.jsx';

const Overview = ({ productInfo, productStyles }) => (
  <>
    <div>This is the overview component!</div>
    <ImageGallery />
    <ProductInformation productInfo={productInfo} productStyles={productStyles} />
    <SocialShare />
    <ProductOverview productInfo={productInfo} />
  </>
);

Overview.defaultProps = {
  productInfo: {},
  productStyles: {},
};

Overview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Overview;
