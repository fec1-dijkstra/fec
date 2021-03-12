/* eslint-disable import/extensions */
import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
    };
    this.scroll = this.scroll.bind(this);
    this.showArrows = this.showArrows.bind(this);
    this.resetStartIndex = this.resetStartIndex.bind(this);
  }

  componentDidMount() {
    document.getElementById('outfitCarousel').style.overflow = "hidden";
  }

  resetStartIndex() {
    this.setState({ startIndex: 0 });
  }

  showArrows() {
    if (this.state.startIndex === 0) {
      document.getElementById('related_carousel_left').style.display = 'none';
      if (document.getElementsByClassName('related_carousel_item').length < 4 || this.state.startIndex + 4 === document.getElementsByClassName('related_carousel_item').length) {
        document.getElementById('related_carousel_right').style.display = 'none';
      } else {
        document.getElementById('related_carousel_right').style.display = 'block';
      }
    } else if (this.state.startIndex !== 0) {
      document.getElementById('related_carousel_left').style.display = 'block';
      if (document.getElementsByClassName('related_carousel_item').length - 4 === this.state.startIndex) {
        document.getElementById('related_carousel_right').style.display = 'none';
      } else {
        document.getElementById('related_carousel_right').style.display = 'block';
      }
    }
  }

  scroll(n) {
    document.getElementById('outfitCarousel').style.overflow = "auto";
    if (n === 1) {
      document.getElementById('relatedCarousel').scrollBy(230, 0);
    }
    if (n === -1) {
      document.getElementById('relatedCarousel').scrollBy(-230, 0);
    }
    document.getElementById('outfitCarousel').style.overflow = "hidden";
    const newState = this.state.startIndex + n;
    this.setState({ startIndex: newState }, () => this.showArrows());
  }

  render() {
    return (
      <div id="RelatedProducts">
        <h3>Related Products</h3>
        <div className="carousel" id="relatedCarousel" onScroll={this.scrolled}>
          {this.props.relatedProductInfo.map((relatedProduct) => (
            <ProductCard key={relatedProduct.productInfo.id} relatedProduct={relatedProduct} productInfo={this.props.productInfo} handleProductChange={this.props.handleProductChange} showArrows={this.showArrows} resetStartIndex={this.resetStartIndex}/>
          ))}
        </div>
          <div className="carousel_actions">
            <button id="related_carousel_left" onClick={() => this.scroll(-1)}></button>
            <button id="related_carousel_right" onClick={() => this.scroll(1)}></button>
          </div>
      </div>
    );
  }
}

export default RelatedItems;
