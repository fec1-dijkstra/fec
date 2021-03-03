import React from 'react';

class AModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: 'Please write your answer here',
      nickname: '',
      email: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextAreaChange(e) {
    this.setState({ textAreaValue: e.target.value });
  }

  handleNicknameChange(e) {
    this.setState({ nickname: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  static handleSubmit(e) {
    // TODO: handle form submission
    // figure out why 'static' has to be here for the linter to not yell
    e.preventDefault();
  }

  render() {
    const { textAreaValue } = this.state;
    const { nickname } = this.state;
    const { email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="test">
          Add Answer
          <textarea value={textAreaValue} onChange={this.handleTextAreaChange} />
          <input type="text" value={nickname} onChange={this.handleNicknameChange} />
          <input type="text" value={email} onChange={this.handleEmailChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default AModal;
