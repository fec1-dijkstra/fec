import React from 'react';
import QSearch from './QSearch.jsx';
import QList from './QList.jsx';

// import { qa } from '../../../dummydata.js';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('qa:', qa);
    return (
      <div>
        QandA component goes here!
        <div>----start----</div>
        <QSearch />
        <QList />
        <button type="button">Add a Question</button>
        <div>-----end-----</div>
      </div>
    );
  }
}

export default QandA;
