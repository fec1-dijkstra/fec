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
      productInfo: {},
      productStyles: {},
      relatedProducts: [],
    };
  }

  componentDidMount() {
    Promise.all([
      queries.getProductList(1, 20, (result) => result),
      queries.getProductInfo(17762, (result) => result),
      queries.getProductStyles(17762, (result) => result),
      queries.getRelatedProducts(17762, (result) => result),
    ])
      .then(([productList, productInfo, productStyles, relatedProducts]) => {
        this.setState({ productList, productInfo, productStyles, relatedProducts });
      })
      .catch((error) => console.log('error caught in App.jsx', error));
  }

  render() {
    const { items, productList, productInfo, productStyles, relatedProducts } = this.state;
    return (
      <div>
        <div> Hello World</div>
        <Overview productInfo={productInfo} productStyles={productStyles} />
        <RelatedItems />
      </div>
    );
  }
}

export default App;
