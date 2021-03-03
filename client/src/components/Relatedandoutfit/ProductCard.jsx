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
      currentProductId: this.props.relatedItemId,
      productInfo: {},
      productStyles: {},
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    const { currentProductId } = this.state;
    // this.getAll(1, 20, currentProductId);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  getAll(pageNumber, countNumber, productId) {
    Promise.all([
      queries.getProductInfo(productId, (result) => result),
      queries.getProductStyles(productId, (result) => result),
    ])
      .then(([productInfo, productStyles]) => {
        this.setState({ productInfo, productStyles });
      })
      .catch((error) => console.log('error caught in ProductCard.jsx', error));
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
          relatedFeatures={this.state.productInfo.features}
          name={this.props.productInfo.name}
          relatedName={this.state.productInfo.name}
        />
        {/* this.state.productStyles.results[0].photos[0].url */}
        <img
          src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
          alt="DefaultStyleImage"
          className="ProductCardImage"
        />
        <div className="ProductInfo">
          <p className="Category">{this.state.productInfo.category}</p>
          <p className="ProductName">{this.state.productInfo.name}</p>
          {/* <p className="ProductPrice">
            {this.state.productStyles.results[0].sale_price ?
              <div>
                <span className="SalePrice">${this.state.productStyles.results[0].sale_price}</span>
                <span className="OriginalPrice">
                  ${this.state.productStyles.results[0].original_price}
                </span>
              </div>
              : <span>${this.state.productStyles.results[0].original_price}</span>
            }
          </p> */}
          <Stars productId={this.state.productInfo.id} />
        </div>
      </div>
    );
  }
}

export default ProductCard;
