import React from 'react';

import IndvQ from './IndvQ.jsx';
import IndvA from './IndvA.jsx';

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
        <IndvQ />
        <IndvA />
        <button type="button">Add an Answer</button>
      </div>
    );
  }
}

export default QCard;
