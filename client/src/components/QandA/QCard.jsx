import React from 'react';

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
        QCard
        <div>
          Q:
          <div>Some question?</div>
        </div>
        <div>
          A:
          <div>Some answer.</div>
          <div>Some other answer.</div>
        </div>
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
