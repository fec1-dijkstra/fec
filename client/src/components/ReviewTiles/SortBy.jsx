import React from 'react';
import axios from 'axios';
import { myToken } from '../../../../token.js';
// pass in state of RenderReviews (reviews) and invoke sort function

class SortBy extends React.Component {
  constructor({ reviews, product }) {
    super();
    this.state = {
      options: ['newest', 'helpful', 'relevant'],
      current: '',
      reviews,
      product,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17762/styles',
      headers: {
        Authorization: myToken,
        'Content-Type': 'application/json',
      },
    };
    event.preventDefault();
    const { product } = this.state;
    debugger;
    const text = event.target.value;
    axios(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${product}&sort=${text}`,
      config
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
