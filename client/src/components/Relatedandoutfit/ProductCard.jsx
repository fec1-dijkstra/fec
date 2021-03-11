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
    // this.bodyScroll = this.bodyScroll.bind(this);
  }

  componentDidMount() {
    this.props.showArrows();

  }

  showModal(e) {
    e.stopPropagation();
    this.setState({ show: !this.state.show },
      // this.bodyScroll(window.scrollY)
    );
  }

  // bodyScroll(x) {
  //   if(!this.state.show) {
  //     document.body.style.position = 'fixed';
  //     document.body.style.top = `-${x}px`;
  //   } else {
  //     const scrollY = document.body.style.top;
  //     document.body.style.position = '';
  //     document.body.style.top = '';
  //     window.scrollTo(0, parseInt(scrollY || '0') * -1);
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    this.props.resetStartIndex();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.props.handleProductChange(this.props.relatedProduct.productInfo.id);
  }

  render() {
    return (
      <div className="ProductCard related_carousel_item" onClick={this.handleClick.bind(this)}>
        <button className="actionButton" id="comparisonButton" onClick={this.showModal} title="Compare to current item">
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
        <div className="ProductCardImage">
          <img
            src={this.props.relatedProduct.productStyles.results[0].photos[0].url || "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"}
            alt="DefaultStyleImage"
          />
        </div>
        <div className="ProductInfo">
          <p className="Category">{this.props.relatedProduct.productInfo.category}</p>
          <p className="ProductName">{this.props.relatedProduct.productInfo.name}</p>
          <p className="ProductPrice">
            {this.props.relatedProduct.productStyles.results[0].sale_price ?
              <>
                <span className="SalePrice">${this.props.relatedProduct.productStyles.results[0].sale_price}</span> <span className="OriginalPrice">
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
