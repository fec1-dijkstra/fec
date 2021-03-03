import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'Why is the sky blue?',
    };
  }

  render() {
    const { question } = this.state;
    return (
      <div>
        Q:
        <div>{question}</div>
        <button type="button">Add an Answer</button>
      </div>
    );
  }
}

export default Question;
