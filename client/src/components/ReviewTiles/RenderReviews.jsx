/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReviewTile from './ReviewTile.jsx';

class RenderReviews extends React.Component {
  constructor(props) {
    super();
    this.state = { reviews: props.reviews, total: 2 };
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews(event) {
    const { total } = this.state;
    event.preventDefault();
    this.setState({ total: total + 2 });
  }

  render() {
    // console.log(this.state);
    const totalReviews = this.state.reviews.length;
    const toRender = this.state.reviews
      .slice(0, this.state.total)
      .map((review) => <ReviewTile review={review} />);
    if (totalReviews > this.state.total) {
      return (
        <div className="reviews">
          {toRender}
          <button type="submit" id="more-reviews" onClick={this.moreReviews}>
            More Reviews
          </button>
        </div>
      );
    }
    return <div className="reviews">{toRender}</div>;
  }
}

export default RenderReviews;
