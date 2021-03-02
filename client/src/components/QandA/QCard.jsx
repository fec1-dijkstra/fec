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
        <div>
          A:
          <div>Some answer.</div>
          <div>Some other answer.</div>
        </div>
        <div>
          by Username, Date
          <div>Helpful? Yes (1)</div>
          <div>Report</div>
        </div>
      </div>
    )
  }
}

export default QCard;
