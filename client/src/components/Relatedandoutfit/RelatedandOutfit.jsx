/* eslint-disable import/extensions */
import React from 'react';
import RelatedItems from './RelatedItems.jsx';

const RelatedandOutfit = function () {
  return (
    <div>
      {/* Pass productId to RelatedItems as prop */}
      <RelatedItems />
      <div>Outfit</div>
    </div>
  );
}

export default RelatedandOutfit;
