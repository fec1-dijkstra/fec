const axios = require('axios');
const auth = require('../../../token.js');

// EXAMPLE CALL
// import queries from '../queries.js';
// queries.getProductList(1, 1, (result) => {
//   console.log(result);
// });

const getProductList = (pageNumber, countNumber, cb) => {
  const page = `page=${pageNumber}`;
  const count = `count=${countNumber}`;

  const productList = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?${page}&${count}`,
    headers: {
      Authorization: auth.myToken,
      'Content-Type': 'application/json',
    },
  };

  axios(productList)
    .then((response) => {
      cb(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  getProductList,
};
