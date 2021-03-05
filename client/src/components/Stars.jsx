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

  ratingCalc(id) {
    let ratings = {};
    queries.getReviewsMeta(id, (data) => {
      ratings = data.ratings;
      if (Object.keys(ratings).length === 0) {
        this.setState({ style: { width: '0%' } });
      }
      let total = 0;
      let count = 0;
      for (const rating in ratings) {
        count += Number(ratings[rating]);
        total += rating * ratings[rating];
      }
      const rounded = Math.ceil(total / count / 0.25) * 0.25;
      const percentage = rounded * 100 / 5;
      this.setState({ style: { width: `${percentage}%` } });
    });
  }

  render() {
    return (
      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={this.state.style}>
          <span>★★★★★</span>
        </div>
        <div className="star-ratings-css-bottom">
          <span>★★★★★</span>
        </div>
      </div>
    );
  }
}

export default Stars;
