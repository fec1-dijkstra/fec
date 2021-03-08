import React from 'react';
import PropTypes from 'prop-types';

const DefaultView = ({ selectedStyle, selectedThumbnail, openExpand, registerMouse }) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    return (
      <div
        className="overview-default-view"
        onMouseUp={openExpand}
        onMouseDown={registerMouse}
        // onKeyPress={openExpand}
        tabIndex={0}
        role="button"
      >
        <img
          src={selectedStyle.photos[selectedThumbnail].url}
          alt={`${selectedStyle.name} default view`}
          id="overview-default-view-img"
        />
      </div>
    );
  }
  return <></>;
};

DefaultView.defaultProps = {
  selectedThumbnail: 0,
  selectedStyle: {},
  openExpand: (event) => event,
  registerMouse: (event) => event,
};

DefaultView.propTypes = {
  selectedThumbnail: PropTypes.number,
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  openExpand: PropTypes.func,
  registerMouse: PropTypes.func,
};

export default DefaultView;
