import React from 'react';
import queries from './queries.js'
// percentage example: 84
class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
  }

  componentDidMount () {
    this.ratingCalc(this.props.productId);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.ratingCalc(this.props.productId);
    }
  }

  ratingCalc(id) {
    if (!id) {
      return null;
    }
    const self = this;
    let ratings = {};
    queries.getReviewsMeta(id, (data) => {
      ratings = data.ratings;
      if (Object.keys(ratings).length === 0) {
        self.setState({ style: { width: '0%' } });
      }
      let total = 0;
      let count = 0;
      for (const rating in ratings) {
        count += Number(ratings[rating]);
        total += rating * ratings[rating];
      }
      const percentage = Math.round(((total / count) * 100) / 5);
      self.setState({ style: { width: `${percentage}%` } });
    });
  }

  render() {
    return (
      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={this.state.style}>
          <span>★★★★★</span>
        </div>
        <div className="star-ratings-css-bottom">
          <span>☆☆☆☆☆</span>
        </div>
      </div>
    );
  }
}

export default Stars;
