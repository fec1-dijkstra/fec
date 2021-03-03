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
        {this.props.relatedProductInfo.map((relatedProduct) => (
          <ProductCard key={relatedProduct.productInfo.id} relatedProduct={relatedProduct} productInfo={this.props.productInfo} handleProductChange={this.props.handleProductChange} />
        ))}
      </div>
    );
  }
}

export default RelatedItems;

// () => handleProductChange(relatedProduct.productInfo.id)