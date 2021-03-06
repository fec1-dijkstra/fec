const calculateRating = (ratings) => {
  if (JSON.stringify(ratings) === '{}' || !ratings) {
    return 0;
  }
  let totalReviews = 0;
  let aggregateScore = 0;
  Object.keys(ratings).forEach((rating) => {;
    totalReviews += Number(ratings[rating]);
    aggregateScore += Number(ratings[rating]) * Number(rating);
  });
  let average = aggregateScore / totalReviews;
  average = Math.round(average / 0.25) / 4;
  return (average * 100) / 5;
};

module.exports = {
  calculateRating,
};
