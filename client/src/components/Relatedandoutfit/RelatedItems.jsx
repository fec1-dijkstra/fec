import React from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedItems = function () {
  // Based on /products/PRODUCT_ID/related
  // array.map(relatedProductId => {
  //   <ProductCard relatedProductId={RelatedProductId} productId={productId} />
  // })
  return <ProductCard />;
};

export default RelatedItems;
