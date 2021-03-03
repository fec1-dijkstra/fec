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
      currentProduct: 17762,
      reviewsMeta: {},
      relatedProductInfo: [],
    };
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  componentDidMount() {
    const { currentProduct } = this.state;
    this.getAll(1, 20, currentProduct);
  }

  handleProductChange(id) {
    this.setState({ currentProduct: id, relatedProductInfo: []}, this.getAll(1, 20, this.state.currentProduct));
  }

  getAll(pageNumber, countNumber, productId) {
    Promise.all([
      queries.getProductList(pageNumber, countNumber, (result) => result),
      queries.getProductInfo(productId, (result) => result),
      queries.getProductStyles(productId, (result) => result),
      queries.getRelatedProducts(productId, (result) => result),
      queries.getReviewsMeta(productId, (result) => result),
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
      this.setState((state) => {
        return {
          relatedProductInfo: state.relatedProductInfo.concat({ productInfo, productStyles }),
        };
      })
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
    } = this.state;
    return (
      <div>
        <div> Hello World</div>
        <Overview productInfo={productInfo} productStyles={productStyles} />
        <RelatedandOutfit
          productInfo={this.state.productInfo}
          relatedProductInfo={this.state.relatedProductInfo}
          handleProductChange={this.handleProductChange}
        />
        <QandA />
        <RatingsAndReviews reviews={reviews[0].results} />
        <Stars productId={17106} />
      </div>
    );
  }
}

export default App;
