import React from 'react';
import PropTypes from 'prop-types';

const ExpandedView = ({
  selectedStyle,
  selectedThumbnail,
  zoomExpand,
  openExpand,
  expandedRef,
}) => {
  if (selectedStyle.photos && selectedStyle.photos.length > 0) {
    return (
      <div className="overview-expanded-view-wrapper">
        <div className="overview-fade-out" />
        <div
          className="overview-expanded-view"
          onBlur={openExpand}
          onClick={zoomExpand}
          onKeyPress={zoomExpand}
          tabIndex={0}
          role="button"
          ref={expandedRef}
        >
          <div className="overview-arrow-background overview-expanded-arrow-background-left">
            <div className="overview-expanded-arrow" />
          </div>
          <div className="overview-arrow-background overview-expanded-arrow-background-right">
            <div className="overview-expanded-arrow" />
          </div>
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
