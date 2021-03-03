import React from 'react';
import QCard from './QCard.jsx';
import QSearch from './QSearch.jsx';
import QList from './QList.jsx';

import { qa } from '../../../dummydata.js';

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
<<<<<<< HEAD
        <QList />
=======
>>>>>>> 958440894c040ea6b11e732b2140da53bc20ebd6
        <button type="button">Add a Question</button>
        <div>-----end-----</div>
      </div>
    );
  }
}

export default QandA;
