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
    };
    this.handleClick = this.handleClick.bind(this);
    this.openExpand = this.openExpand.bind(this);
    // this.closeExpand = this.closeExpand.bind(this);
    this.zoomExpand = this.zoomExpand.bind(this);
    this.expandedRef = this.expandedRef.bind(this);
    this.registerMouse = this.registerMouse.bind(this);
    this.refElement = null;
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
    if (selectedThumbnail !== Number(event.target.id)) {
      selectedThumbnail = Number(event.target.id);
      return this.setState({ selectedThumbnail, isExpanded: false });
    }
    return undefined;
  }

  resetGallery() {
    this.setState({ selectedThumbnail: 0, isExpanded: false, zoomExpanded: false });
  }

  openExpand(event) {
    const { isExpanded } = this.state;
    if (!isExpanded && this.mouseDown) {
      this.mouseDown = false;
      this.setState({ isExpanded: true }, () => ImageGallery.moveFocus(this.refElement));
    } else {
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

  zoomExpand() {
    const { zoomExpanded } = this.state;
    if (zoomExpanded) {
      console.log('zoom out');
      this.setState({ zoomExpanded: false });
    }
    if (!zoomExpanded) {
      console.log('zoom in');
      this.setState({ zoomExpanded: true });
    }
  }

  expandedRef(ref) {
    this.refElement = ref;
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
        />
      );
    }
    return (
      <div className="overview-gallery">
        <div className="overview-thumbnails">
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
