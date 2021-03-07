/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import StarRating from './StarRating.jsx';
import RenderReviews from './RenderReviews.jsx';
import AddReview from './AddReview.jsx';
import DisplayBars from './DisplayBars.jsx';
import AverageScore from './AverageScore.jsx';
import CharacteristicBars from './CharacteristicBars.jsx';

class RatingsAndReviews extends React.Component {
  constructor({ reviews, product }) {
    super();
    this.state = { reviews, product };
  }

  render() {
    const { reviews, product } = this.state;
    const { meta, productName } = this.props;
    if (!meta || JSON.stringify(meta) === '{}') {
      return null;
    }
    return (
      <>
        <div className="overview">
          <StarRating meta={meta} />
          <AverageScore meta={meta} />
          <DisplayBars meta={meta} />
          <CharacteristicBars meta={meta} />
        </div>
        <div className="please-work">
          <RenderReviews reviews={reviews} product={product} />
          <AddReview meta={meta} productName={productName} />
        </div>
      </>
    );
  }
}

export default RatingsAndReviews;
