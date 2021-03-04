// eslint-disable-next-line import/prefer-default-export
export const sortByHelpful = (reviews) => {
  reviews.sort((a, b) => b.helpful - a.helpful);
};
