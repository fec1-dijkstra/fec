import React from 'react';
import PropTypes from 'prop-types';
import Sizes from './Sizes.jsx';
import Quantities from './Quantitites.jsx';
import SocialShare from './SocialShare.jsx';
import queries from '../queries.js';

class AddToCart extends React.Component {
  static moveFocus(element) {
    element.focus();
  }

  static getAllSizesAndQuantities(skus) {
    const allSkus = [];
    const allSizes = [];
    const allQuantities = [];
    if (skus) {
      const skuList = Object.entries(skus);
      for (let i = 0; i < skuList.length; i += 1) {
        if (skuList[i][1].quantity > 0) {
          allSkus.push(skuList[i][0]);
          allSizes.push(skuList[i][1].size);
          allQuantities.push(skuList[i][1].quantity);
        }
      }
    }
    return [allSkus, allSizes, allQuantities];
  }

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
      needsPlease: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addCurrentSelectionsToCart = this.addCurrentSelectionsToCart.bind(this);
    this.pleaseSelect = this.pleaseSelect.bind(this);
    this.selectElement = null;
  }

  componentDidMount() {
    const { selectedStyle } = this.props;
    this.getSkus(selectedStyle);
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
      this.setState({
        selectedSku,
        selectedSize: value,
        selectedQuantity: 1,
        maxQuantity,
        needsPlease: false,
      });
    }
    if (event.target.id === 'quantity-selector') {
      this.setState({ selectedQuantity: value });
    }
  }

  handleClick(event) {
    const { selectedSize } = this.state;
    event.preventDefault();
    if (selectedSize === '' && this.selectElement) {
      AddToCart.moveFocus(this.selectElement);
      this.setState({ needsPlease: true });
    } else {
      this.addCurrentSelectionsToCart();
    }
  }

  getSkus(selectedStyle) {
    if (selectedStyle.skus) {
      const allSizesAndQuantities = AddToCart.getAllSizesAndQuantities(selectedStyle.skus);
      this.setState({
        allSkus: { skus: allSizesAndQuantities[0] },
        allSizes: { sizes: allSizesAndQuantities[1] },
        allQuantities: { quantities: allSizesAndQuantities[2] },
        selectedSize: '',
        selectedQuantity: 1,
        needsPlease: false,
      });
    }
  }

  pleaseSelect(element) {
    this.selectElement = element;
  }

  addCurrentSelectionsToCart() {
    const { selectedSku, selectedQuantity } = this.state;
    if (selectedSku) {
      queries.postCart(selectedSku, () =>
        this.setState({ selectedSku: null, selectedSize: '', selectedQuantity: 1, maxQuantity: 0 })
      );
    }
  }

  render() {
    const { allSizes, selectedSize, selectedQuantity, maxQuantity, needsPlease } = this.state;
    const { selectedStyle, productInfo } = this.props;
    if (allSizes.sizes) {
      let max = maxQuantity;
      if (max > 15) {
        max = 15;
      }
      let addToBagButton = (
        <button type="submit" onClick={this.handleClick}>
          ADD TO BAG
        </button>
      );
      let defaultSize = 'SELECT SIZE';
      const targetSize = allSizes.sizes.length;
      if (allSizes.sizes.length < 1) {
        defaultSize = 'OUT OF STOCK';
        addToBagButton = <></>;
      }
      let defaultQuantity = 1;
      if (selectedSize === '') {
        defaultQuantity = '-';
      }
      const pleaseSelect = () => {
        if (needsPlease) {
          return <div>Please select size</div>;
        }
        return <></>;
      }
      return (
        <>
          {pleaseSelect()}
          <select
            onFocus={ e => e.target.size = targetSize.toString()}
            onBlur={ e => e.target.size = '0'}
            name="size-selector"
            id="size-selector"
            value={selectedSize}
            onChange={this.handleChange}
            disabled={allSizes.sizes.length < 1}
            ref={this.pleaseSelect}
          >
            <option value="">{defaultSize}</option>
            <Sizes allSizes={allSizes} />
          </select>
          <select
            onFocus={(e) => (e.target.size = max.toString())}
            onBlur={(e) => (e.target.size = '0')}
            name="quantity-selector"
            id="quantity-selector"
            value={selectedQuantity}
            onChange={this.handleChange}
            disabled={selectedSize === ''}
          >
            <option value="1">{defaultQuantity}</option>
            <Quantities max={max} />
          </select>
          {addToBagButton}
          <SocialShare selectedStyle={selectedStyle} productInfo={productInfo} />
        </>
      );
    }
    return <></>;
  }
}

AddToCart.defaultProps = {
  selectedStyle: {},
  productInfo: {},
};

AddToCart.propTypes = {
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  productInfo: PropTypes.oneOfType([PropTypes.object]),
};

export default AddToCart;
