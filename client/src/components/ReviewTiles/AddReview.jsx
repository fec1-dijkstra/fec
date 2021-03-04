import React from 'react';
import RenderButtons from './RadioButtons.jsx';
import CharsLeft from './CharsLeft.jsx';

class AddReview extends React.Component {
  constructor() {
    super();
    this.state = { show: false, rec: null, charsLeft: 50 };
    this.showModal = this.showModal.bind(this);
    this.select = this.select.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const charCount = event.target.value.length;
    this.setState({ charsLeft: 50 - charCount });
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
    const { meta } = this.props;
    // console.log(meta);
    const { show, charsLeft } = this.state;
    if (show) {
      return (
        <div className="modal-background">
          <div className="modal-box">
            <div id="write">Write your Review</div>
            <div id="item">
              About the <b>Placeholder</b> here
            </div>
            <form>
              <div className="radio" onChange={this.select}>
                Would you Recommend this Product?
                <input type="radio" value="yes" name="recommend" /> Yes
                <input type="radio" value="no" name="recommend" /> No
              </div>
              <RenderButtons meta={meta} />
              <input
                type="text"
                placeholder={`Example: "Best Purchase Ever!"`}
                style={{ width: 600 }}
              />
              <div>
                <textarea
                  onChange={this.handleChange}
                  style={{ width: 602, height: 300 }}
                  placeholder="Why did you like the Product or not?"
                />
                <CharsLeft chars={charsLeft} />
              </div>
            </form>
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
