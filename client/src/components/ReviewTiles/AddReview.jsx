import React from 'react';
import RenderButtons from './RadioButtons.jsx';
import CharsLeft from './CharsLeft.jsx';
import ReviewRating from './ReviewRating.jsx';

class AddReview extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      rec: null,
      reviewBody: '',
      charsLeft: 50,
      photos: [],
      rating: 0,
    };
    this.showModal = this.showModal.bind(this);
    this.select = this.select.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const chars = event.target.value;
    this.setState({
      charsLeft: 50 - chars.length,
      reviewBody: chars,
    });
  }

  // eslint-disable-next-line react/sort-comp
  uploadPhoto(event) {
    const { photos } = this.state;
    const photo = event.target.value;
    this.setState({ photos: photos.concat(photo) });
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

  handleSubmit(event) {
    event.preventDefault();
    const { rec } = this.state;
    debugger;
  }

  render() {
    const { meta } = this.props;
    const self = this;
    const { show, charsLeft, photos } = this.state;
    if (show) {
      return (
        <div className="modal-background">
          <div className="modal-box">
            <div id="write">Write your Review</div>
            <div id="item">
              About the <b>Placeholder</b> here
            </div>
            <form onSubmit={this.handleSubmit}>
              <ReviewRating self={self} />
              <div className="radio" onChange={this.select}>
                Would you Recommend this Product?
                <input type="radio" value="yes" name="recommend" /> Yes
                <input type="radio" value="no" name="recommend" /> No
              </div>
              <RenderButtons meta={meta} self={self} />
              <input className="info" type="text" placeholder={`Example: "Best Purchase Ever!"`} />
              <div>
                <textarea
                  className="info"
                  onChange={this.handleChange}
                  style={{ height: 200 }}
                  placeholder="Why did you like the Product or not?"
                />
                <CharsLeft chars={charsLeft} />
              </div>
              <div>
                <input className="info" type="text" placeholder="Example: jackson11!" />
              </div>
              <img src={photos[0]} alt="" />
              <div className="caution">
                For privacy reasons, do not use your full name or email address
              </div>
              <div>
                <input className="info" type="text" placeholder="Example: jackson11@email.com" />
              </div>
              <input type="file" onChange={this.uploadPhoto} />
              <button type="submit">Submit</button>
            </form>
            <button type="button" onClick={this.showModal}>
              Close
            </button>
          </div>
        </div>
      );
    }
    return (
      <button type="button" onClick={this.showModal}>
        Leave Your Review
      </button>
    );
  }
}

export default AddReview;
