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
        <div>
          by Username, Date
          <div>
            Helpful?
            <button type="button">Yes</button>
            <div>(1)</div>
          </div>
          <button type="button">Report</button>
        </div>
        <button type="button">Add an Answer</button>
      </div>
    );
  }
}

export default QCard;
