import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewTile from './ReviewTile/ReviewTile.jsx';
// eslint-disable-next-line import/extensions
import products from '../../dummydata.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: products };
  }

  render() {
    const { items } = this.state;
    return <div> Hello World</div>;
  }
}

export default App;