/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ShowPhotos = ({ photos }) => {
  const allPhotos = photos.map((photo) => (
    <RenderPhoto photo={photo} keyval={photo.id} key={photo.id} />
  ));
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
    const { photo, keyval } = this.props;
    const { wasClicked } = this.state;
    if (!wasClicked) {
      return (
        <img
          className="img"
          src={photo.url}
          alt=""
          onClick={this.handleClick}
          style={{ width: 150, height: 150 }}
          key={keyval}
        />
      );
    }
    return (
      <div className="modal-background" key={keyval}>
        <img className="image" src={photo.url} alt="" onClick={this.handleClick} />
      </div>
    );
  }
}

export default ShowPhotos;
