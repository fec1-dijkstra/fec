import React from 'react';

class ReviewTile extends React.Component {
  constructor() {
    super();
    this.state = { stars: 'Placeholder for stars' };
  }

  render() {
    // console.log(this.props);
    const { stars } = this.state;
    return (
      <div className="review-tile">
        <div className="star-rating">{stars}</div>
        <div className="date">Month DD, YYYY</div>
        <div className="summary">60 character Summary (Bold)...</div>
        <div className="summary-ext">...rest of summary</div>
        <div className="review-body">Review body located here</div>
      </div>
    );
  }
}

export default ReviewTile;
