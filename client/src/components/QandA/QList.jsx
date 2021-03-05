import React from 'react';
import QCard from './QCard.jsx';

// TODO: render a bunch of question cards
// this is where I'll want to store the questions to be rendered

class QList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: ['Question one?', 'Question two?', 'Question three?', 'Question four?'],
    };
  }

  render() {
    const { questions } = this.state;
    const QuestionCards = questions.map((question) => {
      return <QCard question={question}/>
    })

    return (
      <div>
        ___QList___
        <div>{QuestionCards}</div>
      </div>
    );
  }
}

export default QList;
