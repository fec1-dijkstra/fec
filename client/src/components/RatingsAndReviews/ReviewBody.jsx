/* eslint-disable react/prop-types */
import React from 'react';

class ReviewBody extends React.Component {
  constructor({ body }) {
    super();
    this.state = { display: body.substring(0, 250) };
    this.showMore = this.showMore.bind(this);
  }

  showMore(event) {
    event.preventDefault();
    const { body } = this.props;
    this.setState({ display: body });
  }

  render() {
    const { body } = this.props;
    const { display } = this.state;
    if (body.length > display.length) {
      return (
        <>
          <div className="body">{`${body.substring(0, 250)}...`}</div>
          <button className="show-more" type="submit" onClick={this.showMore}>
            ...
          </button>
        </>
      );
    }
    return <div className="body">{body}</div>;
  }
}

export default ReviewBody;
