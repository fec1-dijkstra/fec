import React from 'react';

const AverageScore = ({ meta }) => {
  if (JSON.stringify(meta) === '{}') {
    return null;
  }
  let totalReviews = 0;
  let aggregateScore = 0;
  Object.keys(meta.ratings).forEach((rating) => {
    const { ratings } = meta;
    totalReviews += Number(ratings[rating]);
    aggregateScore += Number(ratings[rating]) * Number(rating);
  });
  return (
    <div className="averageScore">{(aggregateScore / totalReviews).toString().substring(0, 3)}</div>
  );
};

export default AverageScore;
