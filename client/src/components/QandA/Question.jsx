import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Q:
        <div>{this.props.question}</div>
        <button type="button">Add an Answer</button>
      </div>
    );
  }
}

export default Question;
