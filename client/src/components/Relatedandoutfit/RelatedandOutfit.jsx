/* eslint-disable import/extensions */
import React from 'react';
import RelatedItems from './RelatedItems.jsx';

const RelatedandOutfit = function ({ relatedProducts, productInfo, relatedProductInfo }) {
  return (
    <div>
      <RelatedItems
        relatedProducts={relatedProducts}
        productInfo={productInfo}
        relatedProductInfo={relatedProductInfo}
      />
      <div>Outfit</div>
    </div>
  );
};

export default RelatedandOutfit;
