/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Summary from './Summary.jsx';
import ReviewBody from './ReviewBody.jsx';
import Recommends from './Recommends.jsx';
import Helpful from './Helpful.jsx';
import ShowPhotos from './ShowPhotos.jsx';
import Response from './Response.jsx';
import SelectStars from './SelectStars.jsx';

class ReviewTile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { review } = this.props;
    return (
      <div className="tile">
        <div className="username">
          <u>{review.reviewer_name}</u>
        </div>
        <div className="date">{new Date(review.date).toString().substring(3, 15)}</div>
        <SelectStars rating={review.rating} />
        <Response response={review.response} />
        <Summary summary={review.summary} />
        <ReviewBody body={review.body} />
        <Recommends recommendation={review.recommend} />
        <Helpful helpfulness={review.helpfulness} />
        <ShowPhotos photos={review.photos} />
      </div>
    );
  }
}
export default ReviewTile;
