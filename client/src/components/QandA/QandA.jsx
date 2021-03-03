import React from 'react';
import QCard from './QCard.jsx';
import QSearch from './QSearch.jsx';

import { qa } from '../../../dummydata.js';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log('qa: ', qa);
    return (
      <div>
        QandA component goes here!
        <div>----start----</div>
        <QSearch />
        <QCard />
        <button type="button">Add a Question</button>
        <div>-----end-----</div>
      </div>
    );
  }
}

export default QandA;
