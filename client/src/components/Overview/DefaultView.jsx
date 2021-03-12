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

const DefaultView = ({ selectedStyle, selectedThumbnail, openExpand, registerMouse, navClick }) => {
  let arrowLeft = <></>;
  let arrowRight = <></>;
  const leftArrow = (
    <div
      className="overview-arrow-background overview-arrow-background-left"
      onClick={navClick}
      role="button"
      onKeyPress={navClick}
      tabIndex={0}
    >
      <div className="overview-arrow" id="overview-arrow-left" />
    </div>
  );
  const rightArrow = (
    <div
      className="overview-arrow-background overview-arrow-background-right"
      onClick={navClick}
      role="button"
      onKeyPress={navClick}
      tabIndex={0}
    >
      <div className="overview-arrow" id="overview-arrow-right" />
    </div>
  );
  if (selectedThumbnail !== 0) {
    arrowLeft = leftArrow;
  }
  if (selectedThumbnail < selectedStyle.photos.length - 1) {
    arrowRight = rightArrow;
  }
  let renderDefault = <div className="overview-default-view" />;
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    if (
      selectedStyle.photos[selectedThumbnail] &&
      urlCheck(selectedStyle.photos[selectedThumbnail].url)
    ) {
      renderDefault = (
        <div className="overview-default-view">
          <div
            className="overview-expand-bubble"
            onMouseUp={openExpand}
            onMouseDown={registerMouse}
            // onKeyPress={openExpand}
            tabIndex={0}
            role="button"
          />
          {arrowLeft}
          {arrowRight}
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
  return renderDefault;
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
