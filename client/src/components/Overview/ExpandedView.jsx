import React from 'react';
import PropTypes from 'prop-types';

const ExpandedView = ({
  selectedStyle,
  selectedThumbnail,
  zoomExpand,
  openExpand,
  expandedRef,
  navClick,
}) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    let arrowLeft = <></>;
    let arrowRight = <></>;
    const leftArrow = (
      <div
        className="overview-arrow-background overview-expanded-arrow-background-left"
        onClick={navClick}
        role="button"
        onKeyPress={navClick}
        tabIndex={0}
      >
        <div className="overview-expanded-arrow" id="overview-arrow-left" />
      </div>
    );
    const rightArrow = (
      <div
        className="overview-arrow-background overview-expanded-arrow-background-right"
        onClick={navClick}
        role="button"
        onKeyPress={navClick}
        tabIndex={0}
      >
        <div className="overview-expanded-arrow" id="overview-arrow-right" />
      </div>
    );
    if (selectedThumbnail !== 0) {
      arrowLeft = leftArrow;
    }
    if (selectedThumbnail < selectedStyle.photos.length - 1) {
      arrowRight = rightArrow;
    }
    return (
      <div className="overview-expanded-view-wrapper">
        <div
          className="overview-fade-out"
          onClick={openExpand}
          role="button"
          tabIndex={0}
          onKeyPress={zoomExpand}
          aria-label="button"
        />
        <div
          className="overview-expanded-view"
          // onBlur={openExpand}
          onClick={zoomExpand}
          onKeyPress={zoomExpand}
          tabIndex={0}
          role="button"
          ref={expandedRef}
        >
          {arrowLeft}
          {arrowRight}
          <img
            src={selectedStyle.photos[selectedThumbnail].url}
            alt={`${selectedStyle.name} default view`}
            id="overview-expanded-view-img"
          />
        </div>
      </div>
    );
  }
  return <></>;
};

ExpandedView.defaultProps = {
  selectedThumbnail: 0,
  selectedStyle: {},
  zoomExpand: (event) => event,
  openExpand: (event) => event,
  expandedRef: (event) => event,
};

ExpandedView.propTypes = {
  selectedThumbnail: PropTypes.number,
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  zoomExpand: PropTypes.func,
  openExpand: PropTypes.func,
  expandedRef: PropTypes.func,
};

export default ExpandedView;
