const axios = require('axios');
const auth = require('./token.js');

const config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17762/styles',
  headers: {
    Authorization: auth.myToken,
    'Content-Type': 'application/json',
  },
};

// get all the styles of product 17762
axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
