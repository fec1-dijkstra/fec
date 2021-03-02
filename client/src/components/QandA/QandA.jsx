import React from 'react';
import QCard from './QCard.jsx';
import QSearch from './QSearch.jsx';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        QandA component goes here!
        <QSearch />
        <QCard />
        <button type="button">Add a Question</button>
      </div>
    );
  }
}

export default QandA;
