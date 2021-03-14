import React from 'react';
import OutfitCard from './OutfitCard.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { outfits: [], startIndex: 0 };
    this.handleAdd = this.handleAdd.bind(this);
    this.getCurrentOutfit = this.getCurrentOutfit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showArrows = this.showArrows.bind(this);
    this.calculateScroll = this.calculateScroll.bind(this);
  }

  componentDidMount() {
    this.setState({ outfits: this.getCurrentOutfit() }, () => this.calculateScroll());
    document.getElementById('outfitCarousel').style.overflow = "hidden";
  }

  calculateScroll() {
    const element = document.getElementById('outfitCarousel');
    const scrolled = Math.floor(element.scrollLeft);
    if (scrolled === 0) {
      this.setState({ startIndex: 0 }, () => this.showArrows());
    } else {
      console.log(Math.floor(scrolled / 230));
      this.setState({ startIndex: Math.floor(scrolled / 230) }, () => this.showArrows())
    }
  }

  handleAdd() {
    const { id, name, category } = this.props.productInfo;
    const { original_price, sale_price, photos } = this.props.productStyles.results[0];
    localStorage.setItem(
      `${id}`,
      `${id}, ${name}, ${category}, ${original_price}, ${sale_price}, ${photos[0].url}`
    );
    this.setState({ outfits: this.getCurrentOutfit() }, () => this.calculateScroll());
  }

  handleDelete(id) {
    localStorage.removeItem(`${id}`);
    this.setState({ outfits: this.getCurrentOutfit() }, this.calculateScroll());
  }

  showArrows() {
    if (this.state.startIndex === 0) {
      document.getElementById('outfit_carousel_left').style.display = 'none';
      if (document.getElementsByClassName('outfit_carousel_item').length < 4 || this.state.startIndex + 4 === document.getElementsByClassName('outfit_carousel_item').length) {
        document.getElementById('outfit_carousel_right').style.display = 'none';
      } else {
        document.getElementById('outfit_carousel_right').style.display = 'block';
      }
    } else if (this.state.startIndex !== 0) {
      console.log('items: ', document.getElementsByClassName('outfit_carousel_item').length, 'start index: ', this.state.startIndex)
      document.getElementById('outfit_carousel_left').style.display = 'block';
      if (document.getElementsByClassName('outfit_carousel_item').length - 4 === this.state.startIndex) {
        document.getElementById('outfit_carousel_right').style.display = 'none';
      } else {
        document.getElementById('outfit_carousel_right').style.display = 'block';
      }
    }
  }

  getCurrentOutfit() {
    let outfits = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      outfits.push(localStorage.getItem(keys[i]));
    }
    return outfits;
  }

  scroll(n) {
    document.getElementById('outfitCarousel').style.overflow = "auto";
    if (n === 1) {
      document.getElementById('outfitCarousel').scrollBy(230, 0);
    }
    if (n === -1) {
      document.getElementById('outfitCarousel').scrollBy(-230, 0);
    }
    document.getElementById('outfitCarousel').style.overflow = "hidden";
    const newState = this.state.startIndex + n;
    this.setState({ startIndex: newState }, () => this.showArrows());
  }

  render() {
    return (
      <div id="YourOutfit">
        <h3>Your Outfit</h3>
        <div className="carousel" id="outfitCarousel" onScroll={this.scrolled} >
          <div className="ProductCard outfit_carousel_item" id="addItem" onClick={this.handleAdd}>
            <button id="addOutfit" title="Add current product to your outfit">+</button>
            <div className="ProductCardImage"></div>
            <div className="ProductInfo"></div>
          </div>
          {this.state.outfits.map((outfit) => (
            <OutfitCard key={outfit.split(',')[0]} outfit={outfit.split(',')} handleDelete={this.handleDelete} handleProductChange={this.props.handleProductChange} showArrows={this.showArrows} />
          ))}
        </div>
        <div className="carousel_actions">
          <button id="outfit_carousel_left" onClick={() => this.scroll(-1)}></button>
          <button id="outfit_carousel_right" onClick={() => this.scroll(1)}></button>
        </div>
      </div>
    );
  }
}

export default Outfit;
