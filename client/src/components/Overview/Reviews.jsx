import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars.jsx';

const countReviews = (reviewsMeta) => {
  let ratingsCount = 0;
  const allRatings = Object.entries(reviewsMeta.ratings);
  for (let i = 0; i < allRatings.length; i += 1) {
    ratingsCount += Number(allRatings[i][1]);
  }
  return ratingsCount;
};

const Reviews = ({ productInfo, reviewsMeta }) => {
  const ratingsCount = countReviews(reviewsMeta);
  if (ratingsCount > 0) {
    return (
      <div className="overview-reviews">
        <Stars productId={productInfo.id} />
        <div>Read all {ratingsCount} reviews</div>
      </div>
    );
  }
  return <></>;
};

Reviews.defaultProps = {
  productInfo: {},
  reviewsMeta: {},
};

Reviews.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
  reviewsMeta: PropTypes.oneOfType([PropTypes.object]),
};

export default Reviews;
