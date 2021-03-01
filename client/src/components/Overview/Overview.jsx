import React from 'react';
import axios from 'axios';
import auth from '../../../../token.js';

import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductOverview from './ProductOverview.jsx';
import SocialShare from './SocialShare.jsx';

const axios = require('axios');
const auth = require('./token.js');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  getSomething() {
    const config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17762/styles',
      headers: {
        Authorization: auth.myToken,
        'Content-Type': 'application/json',
      },
    };

    // get all the styles of product 17762
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
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
