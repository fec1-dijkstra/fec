/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import RatingsAndReviews from './ReviewTiles/RatingsAndReviews.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedandOutfit from './RelatedandOutfit/RelatedandOutfit.jsx';
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
      // 17762 - first product in list
      // 17068 - fully out of stock
      currentProduct: 17070,
      reviewsMeta: {},
      relatedProductInfo: [],
      allReviews: {},
      sortBy: 'newest',
    };
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  componentDidMount() {
    const { currentProduct, sortBy } = this.state;
    this.getAll(1, 20, sortBy, currentProduct);
  }

  handleProductChange(id) {
    this.setState(
      { currentProduct: id, relatedProductInfo: [] },
      this.getAll(1, 20, this.state.sortBy, this.state.currentProduct)
    );
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
      .then(([productList, productInfo, productStyles, relatedProducts, reviewsMeta]) => {
        this.setState(
          { productList, productInfo, productStyles, relatedProducts, reviewsMeta },
          () => {
            relatedProducts.map((id) => this.getRelated(id));
          }
        );
      })
      .catch((error) => console.log('error caught in App.jsx', error));
  }

  getRelated(relatedId) {
    Promise.all([
      queries.getProductInfo(relatedId, (result) => result),
      queries.getProductStyles(relatedId, (result) => result),
    ]).then(([productInfo, productStyles]) => {
      this.setState((state) => ({
        relatedProductInfo: state.relatedProductInfo.concat({ productInfo, productStyles }),
      }));
    });
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
        {/* <div> Hello World</div> */}
        <Overview
          productInfo={productInfo}
          productStyles={productStyles}
          reviewsMeta={reviewsMeta}
        />
        <RelatedandOutfit
          productInfo={this.state.productInfo}
          productStyles={this.state.productStyles}
          relatedProductInfo={this.state.relatedProductInfo}
          handleProductChange={this.handleProductChange}
        />
        <QandA />
        <RatingsAndReviews reviews={reviews[0].results} />
      </div>
    );
  }
}

export default App;
