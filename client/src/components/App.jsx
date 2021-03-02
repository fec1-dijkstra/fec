import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QandA from './QandA/QandA.jsx';
// eslint-disable-next-line import/extensions
import products from '../../dummydata.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: products };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <div> Hello World</div>
        <Overview />
        <RelatedItems />
        <QandA />
      </div>
    );
  }
}

export default App;
