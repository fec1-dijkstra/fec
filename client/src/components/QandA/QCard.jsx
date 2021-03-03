import React from 'react';

import Question from './Question.jsx';
import Answer from './Answer.jsx';

class QCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        ___QCard Component___
        <Question />
        <Answer />
      </div>
    );
  }
}

export default QCard;
