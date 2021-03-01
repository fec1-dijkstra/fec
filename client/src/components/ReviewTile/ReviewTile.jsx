import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super();
    this.state = { reviews: props.reviews, rendered: props.reviews.slice(0, 2) };
  }

  render() {
    console.log(this.state);
    const toRender = this.state.rendered.map((review) => (
      <div className="review-tile">
        <div className="star-rating">{review.rating}</div>
        <div className="date">Month DD, YYYY</div>
        <div className="username">{review.name}</div>
        <div className="summary">{review.summary}</div>
        <div className="summary-ext">...rest of summary</div>
        <div className="review-body">{review.body}</div>
      </div>
    ));
    return <div className="reviews">{toRender}</div>;
  }
}

export default ReviewTile;
