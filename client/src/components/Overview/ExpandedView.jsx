import React from 'react';
import PropTypes from 'prop-types';

const ExpandedView = ({ selectedStyle, selectedThumbnail, zoomExpand, closeExpand, expandedRef }) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    return (
      <div
        className="overview-expanded-view"
        onBlur={closeExpand}
        onClick={zoomExpand}
        onKeyPress={zoomExpand}
        tabIndex={0}
        role="button"
        ref={expandedRef}
      >
        <img
          src={selectedStyle.photos[selectedThumbnail].url}
          alt={`${selectedStyle.name} default view`}
          id="overview-expanded-view-img"
        />
      </div>
    );
  }
  return <></>;
};

ExpandedView.defaultProps = {
  selectedThumbnail: 0,
  selectedStyle: {},
  zoomExpand: (event) => event,
  closeExpand: (event) => event,

};

ExpandedView.propTypes = {
  selectedThumbnail: PropTypes.number,
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  zoomExpand: PropTypes.func,
  closeExpand: PropTypes.func,
};

export default ExpandedView;
