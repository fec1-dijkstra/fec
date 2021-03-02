/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Summary from './Summary.jsx';
import ReviewBody from './ReviewBody.jsx';
import Recommends from './Recommends.jsx';
import Helpful from './Helpful.jsx';

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
        <Recommends recommendation={review.recommend} />
        <Helpful helpfulness={review.helpfulness} />
      </div>
    );
  }
}
export default ReviewTile;
