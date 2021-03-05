/* eslint-disable import/extensions */
import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Related Products</h3>
        <div className="carousel">
          {this.props.relatedProductInfo.map((relatedProduct) => (
            <ProductCard key={relatedProduct.productInfo.id} relatedProduct={relatedProduct} productInfo={this.props.productInfo} handleProductChange={this.props.handleProductChange} />
          ))}
          <div className="carousel_actions">
            <button className="carousel_left" >&#10094;</button>
            <button className="carousel_right">&#10095;</button>
            {/* onclick="plusDivs(-1)" onclick="plusDivs(+1)" */}
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedItems;

// () => handleProductChange(relatedProduct.productInfo.id)