import React from 'react';
import Thumbnails from './Thumbnails.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedThumbnail: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let { selectedThumbnail } = this.state;
    if (selectedThumbnail !== Number(event.target.id)) {
      selectedThumbnail = Number(event.target.id);
      return this.setState({ selectedThumbnail });
    }
    return undefined;
  }

  render() {
    const { selectedStyle } = this.props;
    const { selectedThumbnail } = this.state;
    return (
      <>
        <Thumbnails
          selectedStyle={selectedStyle}
          selectedThumbnail={selectedThumbnail}
          handleClick={this.handleClick}
        />
        <div>Thumbnails...</div>
        <div>Expanded view...</div>
      </>
    );
  }
}

export default ImageGallery;
