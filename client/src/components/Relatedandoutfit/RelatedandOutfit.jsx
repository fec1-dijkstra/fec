/* eslint-disable import/extensions */
import React from 'react';
import RelatedItems from './RelatedItems.jsx';

const RelatedandOutfit = function ({ relatedProducts, productInfo }) {
  return (
    <div>
      <RelatedItems relatedProducts={relatedProducts} productInfo={productInfo} />
      <div>Outfit</div>
    </div>
  );
};

export default RelatedandOutfit;
