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
    this.state = {
      items: products,
      productList: [],
    };
  }

  componentDidMount() {
    // getProductList(pageNumber, countNumber, cb)
    queries.getProductList(1, 20, (result) => {
      this.setState({productList: result});
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
