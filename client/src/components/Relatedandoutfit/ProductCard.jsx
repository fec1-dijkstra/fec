import React from 'react';
import Modal from './Modal.jsx';

const ProductCard = function () {
  return (
    <div className="ProductCard">
      <button type="button" id="modalButton">★</button>
      {/* pass product features and related product features down to modal */}
      <Modal className="modal" />
      <img
        src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
        alt="DefaultStyleImage"
        className="ProductCardImage"
      />
      <div className="ProductInfo">
        {/* From /products/productId .category */}
        <p className="Category">Tank Top</p>
        {/* From /products/productId .name - /products/productId/styles .results[0].name */}
        <p className="ProductName">Forrest Tank Top - Magenta</p>
        <p className="ProductPrice">
          {/* products/:id/styles
          if (.results[0].sale_price) */}
          <span className="SalePrice">$201.00</span>
          <span className="OriginalPrice">$253.00</span>
          {/* else if .results[0].sale_price === null
            <span>$253.00</span> */}
        </p>
        {/* calculate star rating from reviews/meta?product_id=PRODUCT_ID
        for (var key in .ratings) {
          total+=obj.key*key (toNumber);
          ratings+=obj.key
        }
        average=total/ratings */}
        <p className="Stars">★★★☆☆</p>
      </div>
    </div>
  );
};

export default ProductCard;
