import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewTile from './ReviewTile/ReviewTile.jsx';
// eslint-disable-next-line import/extensions
import { products, reviews, qa } from '../../dummydata.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { products, reviews, qa };
  }

  render() {
    const { results } = this.state.reviews[0];
    return <ReviewTile reviews={results} />;
  }
}

export default App;
