import React from 'react';

import Question from './Question.jsx';
import Answer from './Answer.jsx';

import { qa } from '../../../dummydata.js';

class QCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: qa,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        ___QCard Component___
        <Question data={data} />
        <Answer />
      </div>
    );
  }
}

export default QCard;
