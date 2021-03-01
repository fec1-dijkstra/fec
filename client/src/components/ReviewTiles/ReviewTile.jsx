/* eslint-disable react/prop-types */
import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super();
    this.state = { fullBody: props.body, cutBody: props.body };
  }

  render() {
    // console.log(this.props);
    const { review } = this.props;
    return (
      <div className="review-tile" key={review.name}>
        <div className="star-rating">{review.rating}</div>
        <div className="date">{new Date(review.date).toString().substring(0, 15)}</div>
        <div className="username">{review.reviewer_name}</div>
        <div className="summary">{review.summary}</div>
        <div className="summary-ext">...rest of summary</div>
        <div className="review-body">{review.body}</div>
      </div>
    );
  }
}
export default ReviewTile;
