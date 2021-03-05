import React from 'react';

import Question from './Question.jsx';
import Answer from './Answer.jsx';

class QCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div>
        <Question question={this.props.question} />
        <Answer />
      </div>
    );
  }
}

export default QCard;
