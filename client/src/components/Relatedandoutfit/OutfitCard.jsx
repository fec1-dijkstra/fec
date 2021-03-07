import React from 'react';
import Stars from '../Stars.jsx';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleProductChange(this.props.outfit[0]);
  }

  handleRemove(e) {
    e.stopPropagation();
    this.props.handleDelete(this.props.outfit[0]);
  }

  render() {
    return (
      <div className="ProductCard carousel_item" onClick={this.handleClick}>
        <button type="button" onClick={this.handleRemove} id="removeButton">x</button>
        <img src={this.props.outfit[5]} alt="DefaultStyleImage" className="ProductCardImage" />
        <div className="ProductInfo">
          <p className="Category">{this.props.outfit[2]}</p>
          <p className="ProductName">{this.props.outfit[1]}</p>
          <p className="ProductPrice">
            {!this.props.outfit[4].includes("null") ?
              <>
                <span className="SalePrice">${this.props.outfit[4]}</span>
                <span className="OriginalPrice">${this.props.outfit[3]}</span>
              </>
              : <span>${this.props.outfit[3]}</span>
            }
          </p>
          <Stars productId={this.props.outfit[0]} />
        </div>
      </div>
    );
  }
}

export default OutfitCard;