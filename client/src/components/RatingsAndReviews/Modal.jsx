import React from 'react';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { show } = this.state;
    if (show) {
      return <div>Hello</div>;
    }
    return (
      <button type="submit" onClick={this.showModal}>
        Show Modal
      </button>
    );
  }
}

export default Modal;
