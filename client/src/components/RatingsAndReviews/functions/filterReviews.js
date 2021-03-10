const filterReviews = (filtersArr, reviews, reviewData) => {
  const filtered = [];
  let hasFilters = false;
  filtersArr.map((slot) => {
    if (slot) {
      hasFilters = true;
    }
    return null;
  });
  if (hasFilters) {
    reviews.map((review) => {
      if (filtersArr.indexOf(review.rating.toString()) > -1) {
        filtered.push(review);
        return null;
      }
      return null;
    });
    reviewData.results = filtered;
    return reviewData;
  }
  return reviewData;
};

module.exports = {
  filterReviews,
};
