import React from 'react';
import QCard from './QCard.jsx';
import QSearch from './QSearch.jsx';

import { qa } from '../../../dummydata.js';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: qa,
    };
  }

  componentDidMount() {}

  render() {
    const { data } = this.state;
    return (
      <div>
        QandA component goes here!
        <div>----start----</div>
        <QSearch />
        <QCard data={data} />
        <button type="button">Add a Question</button>
        <div>-----end-----</div>
      </div>
    );
  }
}

export default QandA;
