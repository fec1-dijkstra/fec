/* eslint-disable import/extensions */
import React from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedandOutfit from './RelatedandOutfit/RelatedandOutfit.jsx';
import QandA from './QandA/QandA.jsx';
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
      currentProduct: 17762,
    };
  }

  componentDidMount() {
    const { currentProduct } = this.state;
    this.getAll(1, 20, currentProduct);
  }

  getAll(pageNumber, countNumber, productId) {
    Promise.all([
      queries.getProductList(pageNumber, countNumber, (result) => result),
      queries.getProductInfo(productId, (result) => result),
      queries.getProductStyles(productId, (result) => result),
      queries.getRelatedProducts(productId, (result) => result),
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
        <RelatedandOutfit />
        <QandA />
      </div>
    );
  }
}

export default App;
