import React from 'react';
import QCard from './QCard.jsx';
import QSearch from './QSearch.jsx';
import QList from './QList.jsx';

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
        <div>----start----</div>
        <QSearch />
        <QCard />
        <QList />
        <button type="button">Add a Question</button>
        <div>-----end-----</div>
      </div>
    );
  }
}

export default QandA;
