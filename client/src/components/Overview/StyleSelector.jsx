import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: {},
    };
  }

  componentDidUpdate(prevProps) {
    const { productStyles } = this.props;
    if (prevProps.productStyles.results !== productStyles.results) {
      this.findDefaultStyle();
    }
  }

  findDefaultStyle() {
    const { productStyles } = this.props;
    if (productStyles.results && productStyles.results.length > 0) {
      const selectedStyle = productStyles.results.find((style) => style[`default?`] === true);
      return this.setState({ selectedStyle });
    }
    return {};
  }

  render() {
    return (
      <div>
        <div>
          Style `{'>'}` {this.state.selectedStyle.name}
        </div>
        <div>Thumbnails...</div>
        <AddToCart selectedStyle={this.state.selectedStyle} />
      </div>
    );
  }
}

StyleSelector.defaultProps = {
  productStyles: {},
};

StyleSelector.propTypes = {
  productStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default StyleSelector;
