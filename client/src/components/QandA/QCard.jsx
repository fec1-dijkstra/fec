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
        <div>Q: Some question?</div>
        <button type="button">Add an Answer</button>
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
          <div>Report</div>
        </div>
      </div>
    );
  }
}

export default QCard;
