/* eslint-disable import/extensions */
import React from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedItems = function ({ relatedProducts, productInfo}) {
  return (
    <div>
      {relatedProducts.map((relatedItemId) => (
        <ProductCard key={relatedItemId} relatedItemId={relatedItemId} productInfo={productInfo} />
      ))}
    </div>
  );
};

export default RelatedItems;
