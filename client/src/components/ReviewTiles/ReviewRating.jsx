import React from 'react';

class ReviewRating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      hover: false,
      hoverRating: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { id } = event.target;
    const { self } = this.props;
    this.setState({ rating: id }, self.setState({ rating: id }));
  }

  handleEnter(event) {
    event.preventDefault();
    const { id } = event.target;
    this.setState({ hover: true, hoverRating: id });
  }

  handleLeave(event) {
    event.preventDefault();
    this.setState({ hover: false, hoverRating: 0 });
  }

  render() {
    const starCount = [1, 2, 3, 4, 5];
    let { rating, hover, hoverRating } = this.state;
    const starRating = starCount.map((ignore, index) => {
      if (!hover) {
        if (rating) {
          rating -= 1;
          return (
            <span className="checked" id={`${index + 1}`} onClick={this.handleClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
              ★
            </span>
          );
        }
        return (
          <span className="unchecked" id={`${index + 1}`} onClick={this.handleClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
            ★
          </span>
        );
      }
      if (hoverRating) {
        hoverRating -= 1;
        return (
          <span className="checked" id={`${index + 1}`} onClick={this.handleClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
            ★
          </span>
        );
      }
      return (
        <span className="unchecked" id={`${index + 1}`} onClick={this.handleClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          ★
        </span>
      );
    });
    return <div className="rating">{starRating}</div>;
  }
}

export default ReviewRating;
