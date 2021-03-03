/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortBy from './SortBy.jsx';

class RenderReviews extends React.Component {
  constructor({ reviews, product }) {
    super();
    this.state = { reviews, total: 2, product };
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews(event) {
    const { total } = this.state;
    event.preventDefault();
    this.setState({ total: total + 2 });
  }

  render() {
    const list = this;
    const { reviews, product } = this.state;
    debugger;
    const totalReviews = this.state.reviews.length;
    const toRender = reviews
      .slice(0, this.state.total)
      .map((review) => <ReviewTile review={review} />);
    if (totalReviews > this.state.total) {
      return (
        <>
          <div className="reviews">
            <SortBy product={product} list={list} />
            <div className="reviews-container">
              {toRender}
              <button type="submit" id="more-reviews" onClick={this.moreReviews}>
                More Reviews
              </button>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <SortBy product={product} list={list} />
        <div className="reviews">{toRender}</div>;
      </>
    );
  }
}

export default RenderReviews;
