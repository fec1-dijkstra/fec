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
        <div className="helpful">
          Helpful?
          <div className="helpful-yes" onClick={this.handleClick}>
            <u>Yes</u>
          </div>
          <b>{helpfulness}</b> |
          <div className="report">
            <u>Report</u>
          </div>
        </div>
      );
    }
    return (
      <div className="tile-vote">
        <div className="helpful">
          <b>{helpfulness}</b> |
        </div>
        <div className="report">
          <u>Report</u>
        </div>
      </div>
    );
  }
}

export default Helpful;
