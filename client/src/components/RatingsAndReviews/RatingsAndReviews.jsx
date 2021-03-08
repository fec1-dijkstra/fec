/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import StarRating from './StarRating.jsx';
import RenderReviews from './RenderReviews.jsx';
import AddReview from './AddReview.jsx';
import DisplayBars from './DisplayBars.jsx';
import AverageScore from './AverageScore.jsx';
import CharacteristicBars from './CharacteristicBars.jsx';
import AverageRecs from './AverageRecs.jsx';

class RatingsAndReviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { meta, productName, reviews, product, allReviews, app } = this.props;
    if (!meta || JSON.stringify(meta) === '{}') {
      return null;
    }
    return (
      <>
        <div className="item-summary">
          <StarRating meta={meta} />
          <AverageScore meta={meta} />
          <DisplayBars meta={meta} allReviews={allReviews} app={app} />
          <AverageRecs meta={meta} />
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
