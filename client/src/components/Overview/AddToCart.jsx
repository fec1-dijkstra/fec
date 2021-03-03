import React from 'react';
import PropTypes from 'prop-types';
import Sizes from './Sizes.jsx';
import Quantities from './Quantitites.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skus: {},
      allSizes: {},
      allQuantities: {},
      selectedSize: '',
      selectedQuantity: 1,
      maxQuantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { selectedStyle } = this.props;
    if (prevProps.selectedStyle.style_id !== selectedStyle.style_id) {
      this.getSkus(selectedStyle);
    }
  }

  handleChange(event) {
    const { value } = event.target;
    const { allSizes, allQuantities } = this.state;
    const maxQuantity = allQuantities.quantities[allSizes.sizes.indexOf(value)];
    if (event.target.id === 'size-selector') {
      this.setState({ selectedSize: value, selectedQuantity: 1, maxQuantity });
    }
    if (event.target.id === 'quantity-selector') {
      this.setState({ selectedQuantity: value });
    }
  }

  getSkus(selectedStyle) {
    if (selectedStyle.skus) {
      const allSizesAndQuantities = AddToCart.getAllSizesAndQuantities(selectedStyle.skus);
      this.setState({
        skus: selectedStyle.skus,
        allSizes: { sizes: allSizesAndQuantities[0] },
        allQuantities: { quantities: allSizesAndQuantities[1] },
      });
    }
  }

  static getAllSizesAndQuantities(skus) {
    const allSizes = [];
    const allQuantities = [];
    if (skus) {
      const skuList = Object.entries(skus);
      for (let i = 0; i < skuList.length; i += 1) {
        allSizes.push(skuList[i][1].size);
        allQuantities.push(skuList[i][1].quantity);
      }
    }
    return [allSizes, allQuantities];
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
        <button type="submit">ADD TO BAG</button>
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
