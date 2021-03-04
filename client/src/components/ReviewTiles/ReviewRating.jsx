import React from 'react';

const ReviewRating = ({ rating }) => {
  const starCount = [1, 2, 3, 4, 5];
  debugger;
  const starRating = starCount.map(() => {
    if (rating) {
      rating -= 1;
      return <span className="checked">★</span>;
    }
    return <span className="unchecked">★</span>;
  });
  return <div className="rating">{starRating}</div>;
};

export default ReviewRating;
