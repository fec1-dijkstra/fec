import React from 'react';
import { filterReviews } from './functions/filterReviews.js';

class DisplayBars extends React.Component {
  constructor() {
    super();
    this.state = {filters: []};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { filters } = this.state;
    const { app, allReviews, reviewData } = this.props;
    const filterNum = event.currentTarget.id;

    if (filters[Number(filterNum) - 1] !== filterNum) {
      filters[Number(filterNum) - 1] = filterNum;
    } else {
      delete filters[Number(filterNum) - 1];
    }
    app.setState({ reviews: filterReviews(filters, allReviews, reviewData) });
  }

  render() {
    const self = this;
    const { meta } = this.props;
    if (JSON.stringify(meta) === '{}' || !meta) {
      return null;
    }
    let total = 0;
    const { ratings } = meta;
    Object.values(ratings).map((num) => {
      total += Number(num);
      return null;
    });
    const percentages = [0, 0, 0, 0, 0];
    Object.keys(ratings).map((val, ind) => {
      const calc = Math.abs((ratings[val] / total) * 300);
      if (calc > 150) {
        percentages[ind] = 150;
        return null;
      }
      percentages[val - 1] = calc;
      return null;
    });
    const starKeys = ['1', '2', '3', '4', '5'];
    const starRatings = starKeys.map((stars, index) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className="bar-container"
        role="button"
        key={`bar-${stars}`}
        id={stars}
        onClick={self.handleClick}
      >
        <span className="bar-text">{stars}</span>
        <div className="bar-background" key={`${stars}-star-background`} />
        <div
          className="star-bar"
          key={`${stars}-stars`}
          style={{ width: `${percentages[index]}px` }}
        />
      </div>
    ));
    return <div className="bars-container">{starRatings}</div>;
  }
}

export default DisplayBars;
