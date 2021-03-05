import React from 'react';
import identifyChar from './functions/identifyChar.js';

const RenderButtons = ({ meta, self }) => {
  const chars = Object.keys(meta.characteristics);
  const buttons = chars.map((char) => <RadioButton char={char} self={self} />);
  return <div className="radio-btns">{buttons}</div>;
};

class RadioButton extends React.Component {
  constructor() {
    super();
    this.state = { option: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { self } = this.props;
    const { value, name } = event.target;
    // const stateObj = () => {
    //   const returnObj = {};
    //   returnObj[name] = value;
    //   return returnObj;
    // };
    const { characteristics } = self.state;
    characteristics[name] = value;
    self.setState({ characteristics });
  }

  render() {
    const { char } = this.props;
    const options = identifyChar(char);
    return (
      <div className={`${char}-radio-btn`} onChange={this.handleChange}>
        <b>{char}</b>
        <input type="radio" value={1} name={char} /> {options[0]}
        <input type="radio" value={2} name={char} /> {options[1]}
        <input type="radio" value={3} name={char} /> {options[2]}
        <input type="radio" value={4} name={char} /> {options[3]}
        <input type="radio" value={5} name={char} /> {options[4]}
      </div>
    );
  }
}

export default RenderButtons;
