import React from 'react';
import PropTypes from 'prop-types';

const ExpandedView = ({
  selectedStyle,
  selectedThumbnail,
  zoomExpand,
  openExpand,
  expandedRef,
  navClick,
  zoomExpanded,
  mouseMove,
  imageRef,
}) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    let arrowLeft = <></>;
    let arrowRight = <></>;
    let zoomImage = "overview-expanded-view-img";
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
    if (zoomExpanded) {
      zoomImage = "overview-expanded-view-img-zoom";
    }
    return (
      <div className="overview-expanded-view-wrapper">
        <div
          className="overview-fade-out"
          onClick={openExpand}
          role="button"
          tabIndex={0}
          onKeyPress={openExpand}
          aria-label="button"
        />
                  {arrowLeft}
          {arrowRight}
        <div
          className="overview-expanded-view"
          // onBlur={openExpand}
          onMouseDown={zoomExpand}
          onKeyPress={zoomExpand}
          tabIndex={0}
          role="button"
          ref={expandedRef}
          onMouseMove={mouseMove}
        >
          <img
            src={selectedStyle.photos[selectedThumbnail].url}
            alt={`${selectedStyle.name} expanded view`}
            id={zoomImage}
            ref={imageRef}
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
