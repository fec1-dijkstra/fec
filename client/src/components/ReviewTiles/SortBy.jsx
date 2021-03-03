import React from 'react';
import axios from 'axios';
import { myToken } from '../../../../token.js';
// pass in state of RenderReviews (reviews) and invoke sort function

class SortBy extends React.Component {
  constructor({ reviews, product }) {
    super();
    this.state = {
      options: ['most recent', 'most helpful', 'most relevant'],
      current: '',
      reviews,
      product,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { product } = this.state;
    const text = event.target.value;
    // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${product}`,{
    //  Authorization: myToken.token,
    // });
    this.setState({ current: text });
  }

  render() {
    const { options, current } = this.state;
    const dropdowns = options.map((option) => <option value={option}>{option}</option>);
    return (
      <select value={current} onChange={this.handleChange}>
        {dropdowns}
      </select>
    );
  }
}

export default SortBy;
