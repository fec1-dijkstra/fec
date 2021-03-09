import React from 'react';
import PropTypes from 'prop-types';

const urlCheck = (url) => {
  const search = url.search('http');
  if (search === 0) {
    return url;
  }
  if (search > 0) {
    return url.slice(search);
  }
  return null;
};

const Thumbnails = ({ selectedStyle, selectedThumbnail, handleClick }) => {
  let key = 0;
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    return selectedStyle.photos.map((photo, index) => {
      let selectedOutline = <></>;
      let thumbnailClass = 'overview-thumbnail-icon';
      if (index === selectedThumbnail) {
        thumbnailClass = 'overview-selected-thumbnail-icon';
        selectedOutline = <div className="overview-thumbnail-outline" />;
      }
      key += 1;
      return (
        <div
          key={key}
          className={thumbnailClass}
          onClick={handleClick}
          onKeyPress={handleClick}
          tabIndex={0}
          role="button"
        >
          {selectedOutline}
          <img
            src={urlCheck(photo.thumbnail_url)}
            alt={`${selectedStyle.name} thumbnail ${index}`}
            id={index}
          />
        </div>
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
