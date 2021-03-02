/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import RenderReviews from './RenderReviews.jsx';
import Modal from './Modal.jsx';

class RatingsAndReviews extends React.Component {
  constructor({ reviews }) {
    super();
    this.state = { reviews };
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <Modal />
        <RenderReviews reviews={reviews} />
      </>
    );
  }
}

export default RatingsAndReviews;
