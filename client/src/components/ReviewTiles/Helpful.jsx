/* eslint-disable react/prop-types */
import React from 'react';

class Helpful extends React.Component {
  constructor({ helpfulness }) {
    super();
    this.state = { wasClicked: false, helpfulness };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { helpfulness, wasClicked } = this.state;
    event.preventDefault();
    if (!wasClicked) {
      this.setState({ helpfulness: helpfulness + 1, wasClicked: true });
    }
  }

  render() {
    const { helpfulness, wasClicked } = this.state;
    if (!wasClicked) {
      return (
        <div className="helpfulness">
          Helpful?{' '}
          <button className="helpful-button" type="submit" onClick={this.handleClick}>
            <u>Yes</u>
          </button>
          <u>{helpfulness}</u> | <u>Report</u>
        </div>
      );
    }
    return (
      <div className="helpfulness">
        <u>{helpfulness}</u> | <u>Report</u>
      </div>
    );
  }
}

export default Helpful;
