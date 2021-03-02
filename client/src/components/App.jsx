/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QandA from './QandA/QandA.jsx';
import RatingsAndReviews from './ReviewTiles/RatingsAndReviews.jsx';
import { products, reviews, qa } from '../../dummydata.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { products, reviews, qa };
  }

  render() {
    const { products, reviews, qa } = this.state;
    return (
      <div>
        <div> Hello World</div>
        <Overview />
        <RelatedItems />
        <QandA />
        <RatingsAndReviews reviews={reviews[0].results} />
      </div>
    );
  }
}

export default App;
