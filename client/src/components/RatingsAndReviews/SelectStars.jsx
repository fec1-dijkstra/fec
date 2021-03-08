import React from 'react';

const SelectStars = ({ rating }) => {
  const starCount = [0, 0, 0, 0, 0];
  let current = 0;
  const starRating = starCount.map(() => {
    current += 1;
    if (rating > 0) {
      rating -= 1;
      return (
        <span className="checked" key={`star-${current}`}>
          ★
        </span>
      );
    }
    return (
      <span className="unchecked" key={`star-${current}`}>
        ★
      </span>
    );
  });
  return <div className="rating">{starRating}</div>;
};

export default SelectStars;
