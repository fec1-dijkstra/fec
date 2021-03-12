/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortBy from './SortBy.jsx';

class RenderReviews extends React.Component {
  constructor({ reviews, product }) {
    super();
    this.state = { total: 2 };
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews(event) {
    const { total } = this.state;
    event.preventDefault();
    this.setState({ total: total + 2 });
  }

  render() {
    const list = this;
    const { reviews, product, app } = this.props;
    if (!reviews || !product) {
      return null;
    }
    const totalReviews = reviews.length;
    const toRender = reviews.slice(0, this.state.total).map((review) => (
      <div className="review-tile" key={review.review_id}>
        <ReviewTile review={review} />
      </div>
    ));
    if (totalReviews > this.state.total) {
      return (
        <>
          <div className="reviews">
            <SortBy product={product} list={list} app={app} />
            <div className="reviews-container">{toRender}</div>
          </div>
          <div className="more-reviews-button">
            <div className="more-reviews-button-text">More Reviews</div>
            <button type="submit" className="review-submit" onClick={this.moreReviews}>
              More Reviews
            </button>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="reviews">
          <SortBy product={product} list={list} />
          <div className="reviews-container">{toRender}</div>
        </div>
      </>
    );
  }
}

export default RenderReviews;
