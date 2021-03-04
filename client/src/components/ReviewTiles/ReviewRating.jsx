import React from 'react';

class ReviewRating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { id } = event.target;
    debugger;
    this.setState({ rating: id });
  }

  render() {
    const starCount = [1, 2, 3, 4, 5];
    let { rating } = this.state;
    const starRating = starCount.map((ignore, index) => {
      if (rating) {
        rating -= 1;
        return (
          <span className="checked" id={`${index + 1}`} onClick={this.handleClick}>
            ★
          </span>
        );
      }
      return (
        <span className="unchecked" id={`${index + 1}`} onClick={this.handleClick}>
          ★
        </span>
      );
    });
    return <div className="rating">{starRating}</div>;
  }
}

export default ReviewRating;
