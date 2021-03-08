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
    this.scrolled = this.scrolled.bind(this);
    this.arrowHandler = this.arrowHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ outfits: this.getCurrentOutfit() }, this.arrowHandler());
    // window.addEventListener('resize', this.arrowHandler);
    // document.getElementById('outfitCarousel').addEventListener('resize', this.arrowHandler);
  }

  arrowHandler() {
    const element = document.getElementById('outfitCarousel');
    console.log(element.scrollWidth, document.body.clientWidth);
    if(element.scrollWidth <= document.body.clientWidth) {
      document.getElementById('outfit_carousel_right').style.display = 'none';
      document.getElementById('outfit_carousel_left').style.display = 'none';
    } else {
      this.scrolled();
    }
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
    Array.from(document.getElementsByClassName(`outfit carousel_item`), e => e.style['scroll-snap-align'] = "end");
    document.getElementById('outfitCarousel').scrollBy(250, 0);
  }

  scrollLeft() {
    Array.from(document.getElementsByClassName(`outfit carousel_item`), e => e.style['scroll-snap-align'] = "start");
    document.getElementById('outfitCarousel').scrollBy(-250, 0);
  }

  scrolled() {
    const element = document.getElementById('outfitCarousel');
    if(element.offsetWidth + element.scrollLeft > element.scrollWidth - 50) {
      document.getElementById('outfit_carousel_right').style.display = 'none';
    } else if (element.scrollLeft < 50) {
      document.getElementById('outfit_carousel_left').style.display = 'none';
    } else {
      document.getElementById('outfit_carousel_right').style.display = 'block';
      document.getElementById('outfit_carousel_left').style.display = 'block';
    }
  }

  render() {
    return (
      <div id="YourOutfit">
        <h3>Your Outfit</h3>
        <div className="carousel" id="outfitCarousel" onScroll={this.scrolled} >
            <div className="ProductCard outfit carousel_item" onClick={this.handleAdd}>
              <button className="actionButton" id="addOutfit">+</button>
              <div className="ProductCardImage"></div>
              <div className="ProductInfo"></div>
            </div>
          {this.state.outfits.map((outfit) => (
            <OutfitCard key={outfit.split(',')[0]} outfit={outfit.split(',')} handleDelete={this.handleDelete} handleProductChange={this.props.handleProductChange} />
          ))}
        </div>
          <div className="carousel_actions">
            <button id="outfit_carousel_left" onClick={this.scrollLeft}></button>
            <button id="outfit_carousel_right" onClick={this.scrollRight}></button>
          </div>
      </div>
    );
  }
}

export default Outfit;