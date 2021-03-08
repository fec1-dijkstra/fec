/* eslint-disable import/extensions */
import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrolled = this.scrolled.bind(this);
    this.arrowHandler = this.arrowHandler.bind(this);
  }

  componentDidMount() {
    this.arrowHandler();
  }

  arrowHandler() {
    const element = document.getElementById('relatedCarousel');
    if(element.scrollWidth <= document.body.clientWidth) {
      document.getElementById('related_carousel_right').style.display = 'none';
      document.getElementById('related_carousel_left').style.display = 'none';
    } else {
      this.scrolled();
    }
  }

  scrollRight() {
    Array.from(document.getElementsByClassName(`related_carousel_item`), e => e.style['scroll-snap-align'] = "end");
    document.getElementById('relatedCarousel').scrollBy(250, 0);
  }

  scrollLeft() {
    Array.from(
      document.getElementsByClassName(`related_carousel_item`),
      (e) => (e.style['scroll-snap-align'] = 'start')
    );
    document.getElementById('relatedCarousel').scrollBy(-250, 0);
  }

  scrolled() {
    const element = document.getElementById('relatedCarousel');
    if(element.offsetWidth + element.scrollLeft > element.scrollWidth - 50) {
      document.getElementById('related_carousel_right').style.display = 'none';
    } else if (element.scrollLeft < 50) {
      document.getElementById('related_carousel_left').style.display = 'none';
    } else {
      document.getElementById('related_carousel_right').style.display = 'block';
      document.getElementById('related_carousel_left').style.display = 'block';
    }
  }

  render() {
    return (
      <div id="RelatedProducts">
        <h3>Related Products</h3>
        <div className="carousel" id="relatedCarousel" onScroll={this.scrolled}>
          {this.props.relatedProductInfo.map((relatedProduct) => (
            <ProductCard key={relatedProduct.productInfo.id} relatedProduct={relatedProduct} productInfo={this.props.productInfo} handleProductChange={this.props.handleProductChange} />
          ))}
        </div>
          <div className="carousel_actions">
            <button id="related_carousel_left" onClick={this.scrollLeft}></button>
            <button id="related_carousel_right" onClick={this.scrollRight}></button>
          </div>
      </div>
    );
  }
}

export default RelatedItems;

// () => handleProductChange(relatedProduct.productInfo.id)