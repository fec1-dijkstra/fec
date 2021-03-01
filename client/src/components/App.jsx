/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line import/extensions
import RenderReviews from './ReviewTiles/RenderReviews.jsx';
// eslint-disable-next-line import/extensions
import { reviews } from '../../dummydata.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { reviews };
  }

  render() {
    const { results } = this.state.reviews[0];
    return <RenderReviews reviews={results} />;
  }
}

export default App;
