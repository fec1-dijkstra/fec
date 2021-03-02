import React from 'react';

class IndvQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
    };
  }

  render() {
    const { question } = this.state;
    return question;
  }
}

export default IndvQ;
