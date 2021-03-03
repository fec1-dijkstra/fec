/* eslint-disable import/extensions */
import React from 'react';
import ProductCard from './ProductCard.jsx';
import queries from '../queries.js';

const RelatedItems = function({relatedProducts, relatedProductInfo, productInfo}) {
  return (
    <div>
      {relatedProductInfo.map((relatedProduct) => (
        <ProductCard key={relatedProduct.productInfo.id} relatedProduct={relatedProduct} productInfo={productInfo} />
      ))}
    </div>
  );
};

export default RelatedItems;
