/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Summary from './Summary.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super();
    this.state = { fullSum: props.review.summary, cutSum: props.review.summary.substring(60) };
  }

  render() {
    const isLonger = this.state.fullSum.length === this.state.cutSum.length;
    console.log(isLonger);
    const { review } = this.props;
    return (
      <div className="review-tile" key={review.name}>
        <div className="star-rating">{review.rating}</div>
        <div className="date">{new Date(review.date).toString().substring(3, 15)}</div>
        <div className="username">{review.reviewer_name}</div>
        <Summary summary={review.summary}/>
        <div className="review-body">{review.body}</div>
      </div>
    );
  }
}
export default ReviewTile;
