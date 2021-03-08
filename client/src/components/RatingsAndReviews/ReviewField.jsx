import React from 'react';

class ReviewField extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    const { self, prop } = this.props;
    const stateObj = () => {
      const returnObj = {};
      returnObj[prop] = value;
      return returnObj;
    };
    self.setState(stateObj);
  }

  render() {
    const { placeholder, self, limit } = this.props;
    return (
      <input
        className="info"
        type="text"
        placeholder={placeholder}
        value={self.state.key}
        onChange={this.handleChange}
        maxLength={`${limit}`}
      />
    );
  }
}

export default ReviewField;
