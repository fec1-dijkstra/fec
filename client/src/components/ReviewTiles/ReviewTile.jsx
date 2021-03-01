/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Summary from './Summary.jsx';
import ReviewBody from './ReviewBody.jsx';

class ReviewTile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { review } = this.props;
    return (
      <div className="review-tile" key={review.name}>
        <div className="star-rating">{review.rating}</div>
        <div className="date">{new Date(review.date).toString().substring(3, 15)}</div>
        <div className="username">{review.reviewer_name}</div>
        <Summary summary={review.summary} />
        <ReviewBody body={review.body} />
      </div>
    );
  }
}
export default ReviewTile;
