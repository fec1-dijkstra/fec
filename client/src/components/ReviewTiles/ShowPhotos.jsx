/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ShowPhotos = ({ photos }) => {
  const allPhotos = photos.map((photo) => <RenderPhoto photo={photo} />);
  return <div className="photos">{allPhotos}</div>;
};

class RenderPhoto extends React.Component {
  constructor() {
    super();
    this.state = { wasClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { wasClicked } = this.state;
    this.setState({ wasClicked: !wasClicked });
  }

  render() {
    const { photo } = this.props;
    const { wasClicked } = this.state;
    if (!wasClicked) {
      return (
        <img
          src={photo.url}
          alt=""
          onClick={this.handleClick}
          style={{ width: 200, height: 200 }}
        />
      );
    }
    return <div> Photo Was clicked! </div>;
  }
}

export default ShowPhotos;
