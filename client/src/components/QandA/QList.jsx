import React from 'react';

class QList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: ['Are my pants too big?', 'Why is my nose so small?'],
    };
  }

  render() {
    const { questions } = this.state;
    const questionsList = questions.map((question, i) => <div key={question}>{question}</div>);

    return (
      <div>
        QList
        <div>{questionsList}</div>
      </div>
    );
  }
}

export default QList;
