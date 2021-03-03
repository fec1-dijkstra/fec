/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import RatingsAndReviews from './ReviewTiles/RatingsAndReviews.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QandA from './QandA/QandA.jsx';
// eslint-disable-next-line import/extensions
import { products, reviews, qa } from '../../dummydata.js';
import queries from './queries.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products,
      reviews,
      qa,
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
    const { products, reviews, qa, items, productList, productInfo, productStyles, relatedProducts } = this.state;
    return (
      <div>
        <div> Hello World</div>
        <Overview productInfo={productInfo} productStyles={productStyles} />
        <RelatedItems />
        <QandA />
        <RatingsAndReviews reviews={reviews[0].results} product={reviews.product} />
      </div>
    );
  }
}

export default App;
