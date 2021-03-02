import React from 'react';

class QModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        QModal
        <div>Your Question</div>
        <div>Your Nickname</div>
        <div>Your Email</div>
        <button type="button">Submit</button>
      </div>
    );
  }
}

export default QModal;
