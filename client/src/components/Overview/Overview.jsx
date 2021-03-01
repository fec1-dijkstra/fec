import React from 'react';
import queries from '../queries.js';

import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
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
    queries.getProductList(1, 1, (result) => {
      console.log(result);
    });

    return (
      <div>
        <div>This is the overview component!</div>
        <ImageGallery />
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
        <SocialShare />
        <ProductOverview />
      </div>
    );
  }
}
export default Overview;