import React from 'react';

const RenderButtons = ({ meta }) => {
  const chars = Object.keys(meta.characteristics);
  const buttons = chars.map((char) => <RadioButton char={char} />);
  return <div className="radio-btns">{buttons}</div>;
};

class RadioButton extends React.Component {
  constructor() {
    super();
    this.state = { option: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const val = event.target.value;
    this.setState({ option: val });
  }

  render() {
    const { char } = this.props;
    return (
      <div className="radio-btn" onChange={this.handleChange}>
        <input type="radio" value={1} name={char} />
        <input type="radio" value={2} name={char} />
        <input type="radio" value={3} name={char} />
        <input type="radio" value={4} name={char} />
        <input type="radio" value={5} name={char} />
        {char}
      </div>
    );
  }
}

export default RenderButtons;
