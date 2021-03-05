import React from 'react';
import PropTypes from 'prop-types';

const ExpandedView = ({ selectedStyle, selectedThumbnail, openExpand }) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    return (
      <img
        src={selectedStyle.photos[selectedThumbnail].url}
        alt={`${selectedStyle.name} default view`}
        className="expanded-view"
        onClick={openExpand}
        id="expanded-view-photo"
        />
    );
  }
  return <></>;
};

ExpandedView.defaultProps = {
  selectedThumbnail: 0,
  selectedStyle: {},
  openExpand: (event) => event,
};

ExpandedView.propTypes = {
  selectedThumbnail: PropTypes.number,
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  openExpand: PropTypes.func,
};

export default ExpandedView;
