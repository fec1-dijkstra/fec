/* eslint-disable react/destructuring-assignment */
import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super();
    this.state = { reviews: props.reviews, total: 2 };
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews(event) {
    event.preventDefault();
    const count = this.state.total;
    this.setState({ total: count + 2 });
  }

  render() {
    // console.log(this.state);
    const totalReviews = this.state.reviews.length;
    const toRender = this.state.reviews.slice(0, this.state.total).map((review) => (
      <div className="review-tile" key={review.name}>
        <div className="star-rating">{review.rating}</div>
        <div className="date">{new Date(review.date).toString().substring(0, 15)}</div>
        <div className="username">{review.name}</div>
        <div className="summary">{review.summary}</div>
        <div className="summary-ext">...rest of summary</div>
        <div className="review-body">{review.body}</div>
      </div>
    ));
    if (totalReviews > this.state.total) {
      return (
        <div className="reviews">
          {toRender}
          <button type="submit" id="more-reviews" onClick={this.moreReviews}>
            More Reviews
          </button>
        </div>
      );
    }
    return <div className="reviews">{toRender}</div>;
  }
}

export default ReviewTile;
