import React from 'react';
    // eslint-disable-next-line import/extensions
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
// eslint-disable-next-line import/extensions
import products from '../../dummydata.js';
import queries from './queries.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: products };
  }

  componentDidMount() {
    queries.getProductList(1, 1, (result) => {
      console.log(result);
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <div> Hello World</div>
        <Overview />
        <RelatedItems />
      </div>
    );
  }
}

export default App;
