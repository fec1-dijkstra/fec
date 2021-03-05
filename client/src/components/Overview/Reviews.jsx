import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingsCount: 0,
    };
  }

  componentDidMount() {
    const { reviewsMeta } = this.props;
    this.countReviews(reviewsMeta);
  }

  componentDidUpdate(prevProps) {
    const { reviewsMeta } = this.props;
    if (prevProps.reviewsMeta.product_id !== reviewsMeta.product_id) {
      this.countReviews(reviewsMeta);
    }
  }

  countReviews(reviewsMeta) {
    let ratingsCount = 0;
    const allRatings = Object.entries(reviewsMeta.ratings);
    for (let i = 0; i < allRatings.length; i += 1) {
      ratingsCount += Number(allRatings[i][1]);
    }
    return ratingsCount;
  }

  render() {
    const { productInfo } = this.props;
    const { ratingsCount } = this.state;
    if (ratingsCount > 0) {
      return (
        <>
          <Stars productId={productInfo.id} />
          <div>Read all {this.countReviews()} reviews</div>
        </>
      );
    }
    return <></>;
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
