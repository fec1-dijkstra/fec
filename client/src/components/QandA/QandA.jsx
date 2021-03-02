import React from 'react';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        QandA component goes here!
        <div>Nested Inside main QandA: The QASearch Component</div>
        <div>Nested Inside main QandA: The QuestionList Component</div>
        <div>Nested Inside main QandA: The AddAQuestion Component</div>
      </div>
    );
  }
}

export default QandA;
