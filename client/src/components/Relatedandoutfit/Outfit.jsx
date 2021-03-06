import React from 'react';
import OutfitCard from './OutfitCard.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { outfits: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.getCurrentOutfit = this.getCurrentOutfit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  componentDidMount() {
    this.setState({ outfits: this.getCurrentOutfit() });
  }

  handleAdd() {
    const { id, name, category } = this.props.productInfo;
    const { original_price, sale_price, photos} = this.props.productStyles.results[0];
    localStorage.setItem(
      `${id}`,
      `${id}, ${name}, ${category}, ${original_price}, ${sale_price}, ${photos[0].url}`
    );
    this.setState({ outfits: this.getCurrentOutfit() });
  }

  handleDelete(id) {
    localStorage.removeItem(`${id}`);
    this.setState({ outfits: this.getCurrentOutfit() });
  }

  getCurrentOutfit() {
    let outfits = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while ( i -- ) {
      outfits.push(localStorage.getItem(keys[i]));
    }
    return outfits;
  }

  scrollRight() {
    document.getElementById('carousel-left').style.display = 'block';
    document.getElementById('outfitCarousel').scrollBy(250, 0);
    if (window.scrollX === 0) {
      document.getElementById('carousel-left').style.display = 'none';
    }
  }

  scrollLeft() {
    document.getElementById('carousel-right').style.display = 'block';
    document.getElementById('outfitCarousel').scrollBy(-250, 0);
    if (window.scrollX === 0) {
      document.getElementById('carousel-left').style.display = 'none';
    }
  }

  render() {
    return (
      <div id="YourOutfit">
        <h3>Your Outfit</h3>
        <div className="carousel" id="outfitCarousel">
            <div className="ProductCard carousel_item" onClick={this.handleAdd}>
              <button className="actionButton" id="addOutfit">+</button>
              <div className="ProductCardImage"></div>
              <div className="ProductInfo"></div>
            </div>
          {this.state.outfits.map((outfit) => (
            <OutfitCard key={outfit.split(',')[0]} outfit={outfit.split(',')} handleDelete={this.handleDelete} handleProductChange={this.props.handleProductChange} />
          ))}
        </div>
          <div className="carousel_actions">
            <button id="carousel_left" onClick={this.scrollLeft}></button>
            <button id="carousel_right" onClick={this.scrollRight}></button>
          </div>
      </div>
    );
  }
}

export default Outfit;