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
      allCart: [],
      selectedSku: null,
      selectedSize: '',
      selectedQuantity: 1,
      maxQuantity: 0,
      needsPlease: false,
      toggleCart: false,
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
    if (event.target.id === 'overview-size-selector') {
      this.setState({
        selectedSku,
        selectedSize: value,
        selectedQuantity: 1,
        maxQuantity,
        needsPlease: false,
        toggleCart: false,
      });
    }
    if (event.target.id === 'overview-quantity-selector') {
      this.setState({ selectedQuantity: value });
    }
  }

  handleClick(event) {
    const { selectedSize } = this.state;
    event.preventDefault();
    if (event.target.id === 'overview-add-to-bag-btn') {
      if (selectedSize === '' && this.selectElement) {
        AddToCart.moveFocus(this.selectElement);
        this.setState({ needsPlease: true });
      } else {
        this.addCurrentSelectionsToCart();
      }
    }
    if (event.target.id === 'overview-view-bag-btn') {
      this.showCart();
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
        toggleCart: false,
      });
    }
  }

  pleaseSelect(element) {
    this.selectElement = element;
  }

  addCurrentSelectionsToCart() {
    const { selectedSku, selectedQuantity } = this.state;
    if (selectedSku) {
      queries
        .postCart(selectedSku, (result) => result)
        .then(() =>
          queries.getCart((result) => {
            this.setState({
              selectedSku: null,
              selectedSize: '',
              selectedQuantity: 1,
              maxQuantity: 0,
              toggleCart: true,
              allCart: result,
            });
          })
        );
    }
  }

  cartCount() {
    const { allCart } = this.state;
    let count = 0;
    for (let i = 0; i < allCart.length; i++) {
      count += Number(allCart[i].count);
    }
    return count;
  }

  showCart() {
    this.setState({toggleCart: false});
  }

  render() {
    const {
      allSizes,
      selectedSize,
      selectedQuantity,
      maxQuantity,
      needsPlease,
      toggleCart,
    } = this.state;
    const { selectedStyle, productInfo } = this.props;
    if (allSizes.sizes) {
      let max = maxQuantity;
      if (max > 15) {
        max = 15;
      }
      let addToBagButton = () => {
        if (toggleCart) {
          return (
            <button type="submit" id="overview-view-bag-btn" onClick={this.handleClick}>
              VIEW BAG {`(${this.cartCount()})`}
            </button>
          );
        }
        return (
          <button type="submit" id="overview-add-to-bag-btn" onClick={this.handleClick}>
            ADD TO BAG
          </button>
        );
      };
      let defaultSize = 'SELECT SIZE';
      const targetSize = allSizes.sizes.length;
      if (allSizes.sizes.length < 1) {
        defaultSize = 'OUT OF STOCK';
        addToBagButton = () => <></>;
      }
      let defaultQuantity = 1;
      if (selectedSize === '') {
        defaultQuantity = '-';
      }
      const pleaseSelect = () => {
        if (needsPlease) {
          return <div id="overview-please-select">Please select size</div>;
        }
        return <></>;
      };
      return (
        <>
          {pleaseSelect()}
          <select
            onFocus={(e) => (e.target.size = targetSize.toString())}
            onBlur={(e) => (e.target.size = '0')}
            name="overview-size-selector"
            id="overview-size-selector"
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
            name="overview-quantity-selector"
            id="overview-quantity-selector"
            value={selectedQuantity}
            onChange={this.handleChange}
            disabled={selectedSize === ''}
          >
            <option value="1">{defaultQuantity}</option>
            <Quantities max={max} />
          </select>
          {addToBagButton()}
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
