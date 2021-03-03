/* eslint-disable import/extensions */
import React from 'react';
import Modal from './Modal.jsx';
import queries from '../queries.js';
import Stars from '../Stars.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="ProductCard">
        <button type="button" onClick={this.handleOpenModal} id="modalButton">
          ★
        </button>
        <Modal
          className="modal"
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
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
              <div>
                <span className="SalePrice">${this.props.relatedProduct.productStyles.results[0].sale_price}</span>
                <span className="OriginalPrice">
                  ${this.props.relatedProduct.productStyles.results[0].original_price}
                </span>
              </div>
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
