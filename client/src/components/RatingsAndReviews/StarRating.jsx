import React from 'react';
import {calculateRating } from './functions/calculateRating.js';

const StarRating = ({ meta }) => {
  const pixelCount = calculateRating(meta.ratings);

  return (
    <div className="star-rating">
      <div className="star-rating-top" style={{ width: `${pixelCount}px` }}>
        <span>★★★★★</span>
      </div>
      <div className="star-rating-bot">
        <span>★★★★★</span>
      </div>
    </div>
  );
};

export default StarRating;
