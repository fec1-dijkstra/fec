import React from 'react';

class AModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        AModal
        <div>Your Answer</div>
        <div>Your Nickname</div>
        <div>Your Email</div>
        <button type="button">Submit</button>
      </div>
    );
  }
}

export default AModal;
