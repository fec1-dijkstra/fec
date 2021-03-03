/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import RenderReviews from './ReviewTiles/RenderReviews.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedandOutfit from './RelatedandOutfit/RelatedandOutfit.jsx';
import QandA from './QandA/QandA.jsx';
import { products, reviews, qa } from '../../dummydata.js';
import queries from './queries.js';
import Stars from './Stars.jsx';

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
      reviewsMeta: {},
      allReviews: {},
      sortBy: 'newest',
    };
  }

  componentDidMount() {
    const { currentProduct, sortBy } = this.state;
    this.getAll(1, 20, sortBy, currentProduct);
  }

  getAll(pageNumber, countNumber, sortBy, productId) {
    Promise.all([
      queries.getProductList(pageNumber, countNumber, (result) => result),
      queries.getProductInfo(productId, (result) => result),
      queries.getProductStyles(productId, (result) => result),
      queries.getRelatedProducts(productId, (result) => result),
      queries.getReviewsMeta(productId, (result) => result),
      queries.getReviews(pageNumber, countNumber, sortBy, productId, (result) => result),
    ])
      .then(([productList, productInfo, productStyles, relatedProducts, reviewsMeta, allReviews]) => {
          this.setState({
            productList,
            productInfo,
            productStyles,
            relatedProducts,
            reviewsMeta,
            allReviews,
          });
      })
      .catch((error) => console.log('error caught in App.jsx', error));
  }

  render() {
    const {
      products,
      reviews,
      qa,
      items,
      productList,
      productInfo,
      productStyles,
      relatedProducts,
      reviewsMeta,
      allReviews,
    } = this.state;
    return (
      <div>
        <div> Hello World</div>
        <Overview
          productInfo={productInfo}
          productStyles={productStyles}
          reviewsMeta={reviewsMeta}
          allReviews={allReviews}
        />
        <RelatedandOutfit
          relatedProducts={this.state.relatedProducts}
          productInfo={this.state.productInfo}
        />
        <QandA />
        {/* <RenderReviews /> */}
        <Stars productId={17106} />
      </div>
    );
  }
}

export default App;
