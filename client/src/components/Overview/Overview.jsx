import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <div>This is the overview component!</div>
      </div>
    );
  }
}
export default Overview;
