/* eslint-disable import/extensions */
import React from 'react';
import RelatedItems from './RelatedItems.jsx';

const RelatedandOutfit = function ({ handleProductChange, productInfo, relatedProductInfo }) {
  return (
    <div>
      <RelatedItems
        productInfo={productInfo}
        relatedProductInfo={relatedProductInfo}
        handleProductChange={handleProductChange}
      />
      <div>Outfit</div>
    </div>
  );
};

export default RelatedandOutfit;
