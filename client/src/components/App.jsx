import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import products from '../../dummydata.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: products };
  }

  render() {
    const { items } = this.state;
    return <ReviewTile products={items} />;
  }
}

export default App;
