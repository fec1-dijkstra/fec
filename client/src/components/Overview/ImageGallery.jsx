import React from 'react';
import PropTypes from 'prop-types';
import Thumbnails from './Thumbnails.jsx';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';

class ImageGallery extends React.Component {
  static moveFocus(element) {
    element.focus({ preventScroll: true });
    ImageGallery.disableScrolling();
  }

  static scrollUp(element) {
    element.focus();
    element.scrollUp(50);
  }

  static scrollDown(element) {
    element.focus();
    element.scrollDown(50);
  }

  static disableScrolling() {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  }

  static enableScrolling() {
    window.onscroll = () => {};
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedThumbnail: 0,
      isExpanded: false,
      zoomExpanded: false,
      topScroll: false,
      bottomScroll: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.openExpand = this.openExpand.bind(this);
    // this.closeExpand = this.closeExpand.bind(this);
    this.zoomExpand = this.zoomExpand.bind(this);
    this.expandedRef = this.expandedRef.bind(this);
    this.registerMouse = this.registerMouse.bind(this);
    this.thumbRef = this.thumbRef.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.navClick = this.navClick.bind(this);
    this.refElement = null;
    this.refThumb = null;
    this.mouseDown = false;
  }

  // componentDidMount() {
  //   this.resetGallery();
  // }

  componentDidUpdate(prevProps) {
    const { selectedStyle } = this.props;
    if (prevProps.selectedStyle.style_id !== selectedStyle.style_id) {
      this.resetGallery();
    }
  }

  handleClick(event) {
    let { selectedThumbnail } = this.state;
    let targetId = event.target.id;
    if (targetId) {
      if (typeof targetId !== 'number') {
        targetId = Number(targetId);
      }
      if (selectedThumbnail !== targetId) {
        selectedThumbnail = targetId;
        if (selectedThumbnail === 0) {
          return this.setState({ selectedThumbnail });
        }
        if (selectedThumbnail) {
          return this.setState({ selectedThumbnail });
        }
      }
    }
    return undefined;
  }

  resetGallery() {
    this.setState({ isExpanded: false, zoomExpanded: false });
  }

  openExpand(event) {
    console.log(event.target.id)
    console.log(event.target.className)
    const { isExpanded } = this.state;
    if (!isExpanded && this.mouseDown) {
      this.mouseDown = false;
      this.setState({ isExpanded: true }, () => ImageGallery.moveFocus(this.refElement));
    } else if (
      event.target.id !== 'overview-arrow-right' ||
      !event.target.className.includes('overview-expanded-arrow-background-right') ||
      event.target.id !== 'overview-arrow-left' ||
      !event.target.className.includes('overview-expanded-arrow-background-left')
    ) {
      this.mouseDown = false;
      this.setState({ isExpanded: false }, () => ImageGallery.enableScrolling());
    }
  }

  registerMouse() {
    if (this.mouseDown === false) {
      this.mouseDown = true;
    }
  }

  // closeExpand() {
  //   const { isExpanded } = this.state;
  //   if (isExpanded) {
  //     this.setState({ isExpanded: false });
  //   }
  // }

  navClick(event) {
    const { selectedStyle } = this.props;
    let { selectedThumbnail } = this.state;
    if (
      event.target.id === 'overview-arrow-right' ||
      event.target.className.includes('overview-arrow-background-right') ||
      event.target.className.includes('overview-expanded-arrow-background-right')
    ) {
      if (selectedThumbnail < selectedStyle.photos.length - 1) {
        selectedThumbnail += 1;
        this.setState({ selectedThumbnail });
      }
    }
    if (
      event.target.id === 'overview-arrow-left' ||
      event.target.className.includes('overview-arrow-background-left') ||
      event.target.className.includes('overview-expanded-arrow-background-left')
    ) {
      if (selectedThumbnail > 0) {
        selectedThumbnail -= 1;
        this.setState({ selectedThumbnail });
      }
    }
  }

  zoomExpand() {
    const { zoomExpanded } = this.state;
    if (zoomExpanded) {
      this.setState({ zoomExpanded: false });
    }
    if (!zoomExpanded) {
      this.setState({ zoomExpanded: true });
    }
  }

  onScroll(element) {
    const yesTop = this.setState.bind(this, { topScroll: true });
    const noTop = this.setState.bind(this, { topScroll: false });
    const yesBottom = this.setState.bind(this, { bottomScroll: true });
    const noBottom = this.setState.bind(this, { bottomScroll: false });
    element.onscroll = function () {
      if (element.scrollTop !== 0) {
        yesTop();
        yesBottom();
      } else {
        noTop();
        yesBottom();
      }
      if (element.scrollTop === element.scrollHeight - 500) {
        noBottom();
      }
    };
  }

  addFadeTop() {
    const { topScroll } = this.state;
    if (topScroll) {
      return (
        <>
          <div className="overview-thumb-fade-top" ref={this.scrollUp} />
          <div className="overview-arrow-background-up overview-arrow-background-thumb">
            <div className="overview-arrow" />
          </div>
        </>
      );
    }
  }

  addFadeBottom() {
    const { selectedStyle } = this.props;
    const { bottomScroll } = this.state;
    if (bottomScroll && selectedStyle.photos.length > 7) {
      return (
        <>
          <div className="overview-thumb-fade-bottom" ref={this.scrollDown} />
          <div className="overview-arrow-background-down overview-arrow-background-thumb">
            <div className="overview-arrow" />
          </div>
        </>
      );
    }
  }

  expandedRef(ref) {
    this.refElement = ref;
  }

  thumbRef(ref) {
    this.refThumb = ref;
  }

  render() {
    const { selectedStyle } = this.props;
    const { selectedThumbnail, isExpanded } = this.state;
    let viewExpanded = <></>;
    if (isExpanded) {
      viewExpanded = (
        <ExpandedView
          selectedStyle={selectedStyle}
          selectedThumbnail={selectedThumbnail}
          zoomExpand={this.zoomExpand}
          openExpand={this.openExpand}
          expandedRef={this.expandedRef}
          navClick={this.navClick}
        />
      );
    }
    return (
      <div className="overview-gallery">
        {this.addFadeTop()}
        {this.addFadeBottom()}
        <div className="overview-thumbnails" ref={this.onScroll}>
          <Thumbnails
            selectedStyle={selectedStyle}
            selectedThumbnail={selectedThumbnail}
            handleClick={this.handleClick}
          />
        </div>
        <DefaultView
          selectedStyle={selectedStyle}
          selectedThumbnail={selectedThumbnail}
          openExpand={this.openExpand}
          registerMouse={this.registerMouse}
          navClick={this.navClick}
        />
        {viewExpanded}
      </div>
    );
  }
}

ImageGallery.defaultProps = {
  selectedStyle: {},
};

ImageGallery.propTypes = {
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
};

export default ImageGallery;
