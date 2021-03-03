const axios = require('axios');
// eslint-disable-next-line import/no-unresolved
const auth = require('../../../token.js');

// EXAMPLE CALL FROM COMPONENT //
// import queries from '../queries.js';
// queries.getProductList(1, 1, (result) => {
//   console.log(result);
// });

// Helper function for making axios calls //
const axiosCall = (methodObj, cb) =>
  axios(methodObj)
    .then((response) => cb(response.data))
    .catch((error) => console.log('error caught in queries.js', error));

const getProductList = (pageNumber, countNumber, cb) => {
  const productList = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?page=${pageNumber}&count=${countNumber}`,
    headers: {
      Authorization: auth.myToken,
      'Content-Type': 'application/json',
    },
  };

  return axiosCall(productList, cb);
};

const getProductInfo = (productId, cb) => {
  const productInfo = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`,
    headers: {
      Authorization: auth.myToken,
      'Content-Type': 'application/json',
    },
  };

  return axiosCall(productInfo, cb);
};

const getProductStyles = (productId, cb) => {
  const productStyles = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`,
    headers: {
      Authorization: auth.myToken,
      'Content-Type': 'application/json',
    },
  };

  return axiosCall(productStyles, cb);
};

const getRelatedProducts = (productId, cb) => {
  const relatedProducts = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`,
    headers: {
      Authorization: auth.myToken,
      'Content-Type': 'application/json',
    },
  };

  return axiosCall(relatedProducts, cb);
};

const getReviewsMeta = (productId, cb) => {
  const reviewsMeta = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`,
    headers: {
      Authorization: auth.myToken,
      'Content-Type': 'application/json',
    },
  };

  return axiosCall(reviewsMeta, cb);
};

const getReviews = (productId, cb) => {
  const allReviews = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`,
    headers: {
      Authorization: auth.myToken,
      'Content-Type': 'application/json',
    },
  };

  return axiosCall(allReviews, cb);
};

module.exports = {
  getProductList,
  getProductInfo,
  getProductStyles,
  getRelatedProducts,
  getReviewsMeta,
  getReviews,
};
