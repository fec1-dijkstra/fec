import React from 'react';
import PropTypes from 'prop-types';

import ProductInformation from './ProductInformation.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductOverview from './ProductOverview.jsx';
import SocialShare from './SocialShare.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { productInfo, productStyles } = this.props;
    return (
      <div>
        <div>This is the overview component!</div>
        <ImageGallery />
        <ProductInformation productInfo={productInfo} productStyles={productStyles} />
        <AddToCart />
        <SocialShare />
        <ProductOverview productInfo={productInfo} />
      </div>
    );
  }
}

Overview.defaultProps = {
  productInfo: {},
  productStyles: {},
};

Overview.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  productStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Overview;
