import React from 'react';

class AddReview extends React.Component {
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
      return (
        <div className="modal-background">
          <div className="modal-box">
            <div id="text">This is the review modal!</div>
            <button type="submit" onClick={this.showModal}>
              Close
            </button>
          </div>
        </div>
      );
    }
    return (
      <button type="submit" onClick={this.showModal}>
        Leave Your Review
      </button>
    );
  }
}

export default AddReview;
