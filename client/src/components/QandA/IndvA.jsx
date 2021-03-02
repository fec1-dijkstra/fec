import React from 'react';

class IndvA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 'Because it is.',
    };
  }

  render() {
    const { answer } = this.state;
    return (
      <div>
        A:
        <div>{answer}</div>
      </div>
    );
  }
}

export default IndvA;
