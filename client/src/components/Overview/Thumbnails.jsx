import React from 'react';
import PropTypes from 'prop-types';

const urlCheck = (url) => {
  if (url) {
    const search = url.search('http');
    if (search === 0) {
      return url;
    }
    if (search > 0) {
      return url.slice(search);
    }
  }
  return null;
};

const Thumbnails = ({ selectedStyle, selectedThumbnail, handleClick }) => {
  let key = 0;
  if (selectedStyle.photos) {
    let thumbnailClass = 'overview-thumbnail-icon';
    let thumb = <div className={thumbnailClass} key="error" />;
    if (selectedStyle.photos.length > 0) {
      return selectedStyle.photos.map((photo, index) => {
        let selectedOutline = <></>;
        thumbnailClass = 'overview-thumbnail-icon';
        if (index === selectedThumbnail) {
          thumbnailClass = 'overview-selected-thumbnail-icon';
          selectedOutline = <div className="overview-thumbnail-outline" />;
        }
        if (urlCheck(photo.thumbnail_url)) {
          thumb = (
            <div
              key={key}
              className={thumbnailClass}
              onClick={handleClick}
              onMouseEnter={handleClick}
              onFocus={handleClick}
              onKeyPress={handleClick}
              tabIndex={0}
              role="button"
              id={index}
            >
              {selectedOutline}
              <img
                src={urlCheck(photo.thumbnail_url)}
                alt={`${selectedStyle.name} thumbnail ${index}`}
                id={index}
              />
            </div>
          );
        }
        key += 1;
        return thumb;
      });
    }
    return thumb;
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
