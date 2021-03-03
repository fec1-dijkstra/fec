import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsCount: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { reviewsMeta } = this.props;
    if (prevProps.reviewsMeta !== reviewsMeta) {
      this.countReviews(reviewsMeta);
    }
  }

  countReviews(reviewsMeta) {
    const ratingsCount = 0;
    const allRatings = Object.entries(reviewsMeta.ratings);
    for (let i = 0; i < allRatings.length; i += 1) {
      ratingsCount += allRatings[i][1];
    }
  }

  render() {
    const { productInfo, reviewsMeta } = this.props;
    return (
      <>
        <Stars productId={productInfo.id} />
        <div>Read all {console.log(reviewsMeta)} reviews</div>
      </>
    );
  }
}

Reviews.defaultProps = {
  productInfo: {},
  reviewsMeta: {},
};

Reviews.propTypes = {
  productInfo: PropTypes.oneOfType([PropTypes.object]),
  reviewsMeta: PropTypes.oneOfType([PropTypes.object]),
};

export default Reviews;
