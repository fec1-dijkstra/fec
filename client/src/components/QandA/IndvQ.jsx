import React from 'react';

class IndvQ extends React.Component {
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
      </div>
    );
  }
}

export default IndvQ;
