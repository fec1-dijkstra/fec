/* eslint-disable import/extensions */
import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="RelatedProducts">
        <h3>Related Products</h3>
        <div className="carousel">
          {this.props.relatedProductInfo.map((relatedProduct) => (
            <ProductCard key={relatedProduct.productInfo.id} relatedProduct={relatedProduct} productInfo={this.props.productInfo} handleProductChange={this.props.handleProductChange} />
          ))}
        </div>
          {/* <div className="carousel_actions">
            <button id="carousel_left" ></button>
            <button id="carousel_right"></button>
          </div> */}
      </div>
    );
  }
}

export default RelatedItems;

// () => handleProductChange(relatedProduct.productInfo.id)