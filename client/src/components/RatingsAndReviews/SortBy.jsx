import React from 'react';
import axios from 'axios';
import { myToken } from '../../../../token.js';
// pass in state of RenderReviews (reviews) and invoke sort function

class SortBy extends React.Component {
  constructor({ product }) {
    super();
    this.state = {
      options: ['relevant', 'newest', 'helpful'],
      current: '',
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
    const self = this;
    const { product } = this.state;
    const text = event.target.value;
    axios(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${product}&sort=${text}&count=25`,
      config
    ).then((data) => {
      self.setState({ current: text }, self.props.list.setState({ reviews: data.data.results }));
    });
  }

  render() {
    const { options, current } = this.state;
    const dropdowns = options.map((option) => (
      <option value={option} key={option}>
        {option}
      </option>
    ));
    return (
      <select className="sort-by" value={current} onChange={this.handleChange}>
        {dropdowns}
      </select>
    );
  }
}

export default SortBy;
