import React from 'react';
import PropTypes from 'prop-types';
import Sizes from './Sizes.jsx';
import Quantities from './Quantitites.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkus: {},
      allSizes: {},
      allQuantities: {},
      selectedSku: null,
      selectedSize: '',
      selectedQuantity: 1,
      maxQuantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addCurrentSelectionsToCart = this.addCurrentSelectionsToCart.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { selectedStyle } = this.props;
    if (prevProps.selectedStyle.style_id !== selectedStyle.style_id) {
      this.getSkus(selectedStyle);
    }
  }

  handleChange(event) {
    const { value } = event.target;
    const { allSkus, allSizes, allQuantities } = this.state;
    const valueIndex = allSizes.sizes.indexOf(value);
    const selectedSku = allSkus.skus[valueIndex];
    const maxQuantity = allQuantities.quantities[valueIndex];
    if (event.target.id === 'size-selector') {
      this.setState({ selectedSku, selectedSize: value, selectedQuantity: 1, maxQuantity });
    }
    if (event.target.id === 'quantity-selector') {
      this.setState({ selectedQuantity: value });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.addCurrentSelectionsToCart();
  }

  getSkus(selectedStyle) {
    if (selectedStyle.skus) {
      const allSizesAndQuantities = AddToCart.getAllSizesAndQuantities(selectedStyle.skus);
      this.setState({
        allSkus: { skus: allSizesAndQuantities[0] },
        allSizes: { sizes: allSizesAndQuantities[1] },
        allQuantities: { quantities: allSizesAndQuantities[2] },
      });
    }
  }

  static getAllSizesAndQuantities(skus) {
    const allSkus = [];
    const allSizes = [];
    const allQuantities = [];
    if (skus) {
      const skuList = Object.entries(skus);
      for (let i = 0; i < skuList.length; i += 1) {
        allSkus.push(skuList[i][0]);
        allSizes.push(skuList[i][1].size);
        allQuantities.push(skuList[i][1].quantity);
      }
    }
    return [allSkus, allSizes, allQuantities];
  }

  addCurrentSelectionsToCart() {
    const { selectedStyle } = this.props;
    const { selectedSku, selectedSize, selectedQuantity } = this.state;
    if (selectedSku) {
      alert(
        `ADDED TO BAG: SKU: ${selectedSku} Size: ${selectedSize} Quantity: ${selectedQuantity}`
      );
      this.setState({ selectedSku: null, selectedSize: '', selectedQuantity: 1, maxQuantity: 0 });
    }
  }

  render() {
    const { allSizes, selectedSize, selectedQuantity, maxQuantity } = this.state;
    return (
      <>
        <select
          name="size-selector"
          id="size-selector"
          value={selectedSize}
          onChange={this.handleChange}
        >
          <option value="">SELECT SIZE</option>
          <Sizes allSizes={allSizes} />
        </select>
        <select
          name="quantity-selector"
          id="quantity-selector"
          value={selectedQuantity}
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <Quantities maxQuantity={maxQuantity} />
        </select>
        <button type="submit" onClick={this.handleClick}>
          ADD TO BAG
        </button>
      </>
    );
  }
}

AddToCart.defaultProps = {
  selectedStyle: {},
};

AddToCart.propTypes = {
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
};

export default AddToCart;
