import React from 'react';

class AddReview extends React.Component {
  constructor() {
    super();
    this.state = { show: false, rec: null };
    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ show: !show });
  }

  select(event) {
    const pick = event.target.value;
    this.setState({ rec: pick });
  }

  render() {
    const { show } = this.state;
    if (show) {
      return (
        <div className="modal-background">
          <div className="modal-box">
            <div id="write">Write your Review</div>
            <div id="item">
              About the <b>Placeholder</b> here
            </div>
            <div className="radio" onChange={this.select}>
              Would you Recommend this Product?
              <input type="radio" value="yes" name="recommend" /> Yes
              <input type="radio" value="no" name="recommend" /> No
            </div>
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