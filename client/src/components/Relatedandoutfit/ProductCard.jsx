/* eslint-disable import/extensions */
import React from 'react';
import Modal from './Modal.jsx';
import queries from '../queries.js';

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
    this.getAll(1, 20, currentProductId);
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
        {/* pass product features and related product features down to modal */}
        <Modal
          className="modal"
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          features={this.props.productInfo.features}
          relatedFeatures={this.state.productInfo.features}
          name={this.props.productInfo.name}
          relatedName={this.state.productInfo.name}
        />
        <img
          src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
          alt="DefaultStyleImage"
          className="ProductCardImage"
        />
        <div className="ProductInfo">
          {/* From /products/productId .category */}
          <p className="Category">{this.state.productInfo.category}</p>
          {/* From /products/productId .name - /products/productId/styles .results[0].name */}
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
  }
}

export default ProductCard;
