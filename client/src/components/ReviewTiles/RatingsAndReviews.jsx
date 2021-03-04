/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import RenderReviews from './RenderReviews.jsx';
<<<<<<< HEAD
import AddReview from './AddReview.jsx';

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
=======

class RatingsAndReviews extends React.Component {
  constructor({ reviews }) {
    super();
    this.state = { reviews };
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <RenderReviews reviews={reviews} />
>>>>>>> eed5345b28c12b44b5f20bec9d3ee907ffa05f9c
      </>
    );
  }
}

export default RatingsAndReviews;
