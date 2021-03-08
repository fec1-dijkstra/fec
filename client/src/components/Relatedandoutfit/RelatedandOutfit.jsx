/* eslint-disable import/extensions */
import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';

const RelatedandOutfit = function ({ handleProductChange, productInfo, relatedProductInfo, productStyles, showComparisonModal, handleModalOpen}) {
  return (
    <div>
      <RelatedItems
        showComparisonModal={showComparisonModal}
        handleModalOpen={handleModalOpen}
        productInfo={productInfo}
        relatedProductInfo={relatedProductInfo}
        handleProductChange={handleProductChange}
      />
      <Outfit
        productInfo={productInfo}
        productStyles={productStyles}
        handleProductChange={handleProductChange}
      />
    </div>
  );
};

export default RelatedandOutfit;
