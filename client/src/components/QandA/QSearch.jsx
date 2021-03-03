import React from 'react';

class QSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value="Search" />
          <button type="submit">🔍</button>
        </form>
      </div>
    );
  }
}

export default QSearch;
