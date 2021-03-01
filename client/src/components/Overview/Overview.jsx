import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <div>This is the overview component!</div>
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
        <ImageGallery />
      </div>
    );
  }
}
export default Overview;
