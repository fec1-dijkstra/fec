/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import RenderReviews from './RenderReviews.jsx';
import AddReview from './AddReview.jsx';
import Stars from '../Stars.jsx';

class RatingsAndReviews extends React.Component {
  constructor({ reviews, product }) {
    super();
    this.state = { reviews, product };
  }

  render() {
    const { reviews, product } = this.state;
    const { meta } = this.props;
    return (
      <>
        <RenderReviews reviews={reviews} product={product} />
        <AddReview meta={meta} />
      </>
    );
  }
}

export default RatingsAndReviews;
