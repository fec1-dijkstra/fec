import React from 'react';

class QSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'Search',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let { search } = this.state;
    return (
      <div>
        <form>
          <input type="text" value={search} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>
            🔍
          </button>
        </form>
      </div>
    );
  }
}

export default QSearch;
