import React from 'react';
import PropTypes from 'prop-types';

const DefaultView = ({ selectedStyle, selectedThumbnail, openExpand }) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    return (
      <img
        onKeyPress="asdf"
        src={selectedStyle.photos[selectedThumbnail].url}
        alt={`${selectedStyle.name} default view`}
        className="default-view"
        onClick={openExpand}
        id="default-view-photo"
      />
    );
  }
  return <></>;
};

DefaultView.defaultProps = {
  selectedThumbnail: 0,
  selectedStyle: {},
  openExpand: (event) => event,
};

DefaultView.propTypes = {
  selectedThumbnail: PropTypes.number,
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  openExpand: PropTypes.func,
};

export default DefaultView;
