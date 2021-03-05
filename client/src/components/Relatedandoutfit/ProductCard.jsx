/* eslint-disable import/extensions */
import React from 'react';
import Modal from './Modal.jsx';
import Stars from '../Stars.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    e.stopPropagation();
    this.setState({ show: !this.state.show });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleProductChange(this.props.relatedProduct.productInfo.id);
  }

  render() {
    return (
      <div className="ProductCard carousel_item" onClick={this.handleClick}>
        <button className="toggle-button" onClick={this.showModal} >
          ☆
        </button>
        <Modal
          className="modal"
          show={this.state.show}
          onClose={this.showModal}
          features={this.props.productInfo.features}
          relatedFeatures={this.props.relatedProduct.productInfo.features}
          name={this.props.productInfo.name}
          relatedName={this.props.relatedProduct.productInfo.name}
        />
        <img
          src={this.props.relatedProduct.productStyles.results[0].photos[0].url}
          alt="DefaultStyleImage"
          className="ProductCardImage"
        />
        <div className="ProductInfo">
          <p className="Category">{this.props.relatedProduct.productInfo.category}</p>
          <p className="ProductName">{this.props.relatedProduct.productInfo.name}</p>
          <p className="ProductPrice">
            {this.props.relatedProduct.productStyles.results[0].sale_price ?
              <>
                <span className="SalePrice">${this.props.relatedProduct.productStyles.results[0].sale_price}</span>
                <span className="OriginalPrice">
                  ${this.props.relatedProduct.productStyles.results[0].original_price}
                </span>
              </>
              : <span>${this.props.relatedProduct.productStyles.results[0].original_price}</span>
            }
          </p>
          <Stars productId={this.props.relatedProduct.productInfo.id} />
        </div>
      </div>
    );
  }
}

export default ProductCard;
