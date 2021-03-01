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
    debugger;
    const count = this.state.total;
    this.setState({ total: count + 2 });
  }

  render() {
    // console.log(this.state);
    const toRender = this.state.reviews.slice(0, this.state.total).map((review) => (
      <div className="review-tile" key={review.name}>
        <div className="star-rating">{review.rating}</div>
        <div className="date">Month DD, YYYY</div>
        <div className="username">{review.name}</div>
        <div className="summary">{review.summary}</div>
        <div className="summary-ext">...rest of summary</div>
        <div className="review-body">{review.body}</div>
      </div>
    ));
    return (
      <div className="reviews">
        {toRender}{' '}
        <button type="submit" id="more-reviews" onClick={this.moreReviews}>
          More Reviews
        </button>
      </div>
    );
  }
}

export default ReviewTile;
