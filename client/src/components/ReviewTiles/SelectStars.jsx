import React from 'react';

const SelectStars = ({ rating }) => {
  const starCount = [0, 0, 0, 0, 0];
  const starRating = starCount.map(() => {
    if (rating > 0) {
      rating -= 1;
      return <span className="checked">★</span>;
    }
    return <span className="unchecked">★</span>;
  });
  return <div className="rating">{starRating}</div>;
};

export default SelectStars;
