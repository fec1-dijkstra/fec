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

const DefaultView = ({ selectedStyle, selectedThumbnail, openExpand, registerMouse }) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    let renderDefault = <></>;
    if (urlCheck(selectedStyle.photos[selectedThumbnail].url)) {
      renderDefault = (
        <div
          className="overview-default-view"
          onMouseUp={openExpand}
          onMouseDown={registerMouse}
          // onKeyPress={openExpand}
          tabIndex={0}
          role="button"
        >
          <img
            src={urlCheck(selectedStyle.photos[selectedThumbnail].url)}
            alt={`${selectedStyle.name} default view`}
            id="overview-default-view-img"
          />
        </div>
      );
    }
    return renderDefault;
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
