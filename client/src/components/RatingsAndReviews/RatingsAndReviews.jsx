/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import RenderReviews from './RenderReviews.jsx';
import AddReview from './AddReview.jsx';
import DisplayBars from './DisplayBars.jsx';
import AverageScore from './AverageScore.jsx';

class RatingsAndReviews extends React.Component {
  constructor({ reviews, product }) {
    super();
    this.state = { reviews, product };
  }

  render() {
    const { reviews, product } = this.state;
    const { meta, productName } = this.props;
    return (
      <>
        <AverageScore meta={meta} />
        <DisplayBars meta={meta} />
        <RenderReviews reviews={reviews} product={product} />
        <AddReview meta={meta} productName={productName} />
      </>
    );
  }
}

export default RatingsAndReviews;
