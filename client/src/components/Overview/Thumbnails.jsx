import React from 'react';
import PropTypes from 'prop-types';

const Thumbnails = ({ selectedStyle, selectedThumbnail, handleClick }) => {
  let key = 0;
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    return selectedStyle.photos.map((photo, index) => {
      let thumbnailClass = 'thumbnail-icon';
      if (index === selectedThumbnail) {
        thumbnailClass = 'selected-thumbnail-icon';
      }
      key += 1;
      return (
        <img
          key={key}
          src={photo.thumbnail_url}
          alt={`${selectedStyle.name} thumbnail ${index}`}
          className={thumbnailClass}
          onClick={handleClick}
          id={index}
         />
      );
    });
  }
  return <></>;
};

Thumbnails.defaultProps = {
  selectedThumbnail: 0,
  selectedStyle: {},
  handleClick: (event) => event,
};

Thumbnails.propTypes = {
  selectedThumbnail: PropTypes.number,
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  handleClick: PropTypes.func,
};

export default Thumbnails;
