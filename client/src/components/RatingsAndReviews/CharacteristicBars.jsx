import React from 'react';
import identifyChar from './functions/identifyChar.js';

class CharacteristicBars extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { characteristics } = this.props.meta;
    const bars = Object.keys(characteristics).map((char) => {
      const labels = identifyChar(char);
      // console.log(characteristics[char].value);
      return (
        <div className="char-subcontainer" key={char.id}>
          <div
            className="char-slider"
            style={{ marginLeft: `${(characteristics[char].value / 5) * 100 * 2.49}px` }}
          />
          <RenderBar labels={labels}/>
          <div className="char-title">{char.id}</div>
        </div>
      );
    });
    return <div className="char-container">{bars}</div>;
  }
}

const RenderBar = ({ labels }) => (
  <>
    <div className="segment-container">
      <div className="char-segment" style={{ marginLeft: '0px' }} />
      <div className="char-segment" />
      <div className="char-segment" style={{ marginRight: '0px' }} />
    </div>
    <div className="text-container">
      <div className="segment-text">{labels[0]}</div>
      <div className="segment-text">{labels[2]}</div>
      <div className="segment-text">{labels[4]}</div>
    </div>
  </>
);

export default CharacteristicBars;
/*
{
  characteristics: {Size: {…}, Width: {…}, Comfort: {…}, Quality: {…}}
  product_id: "17762"
  ratings: {1: "14", 2: "11", 3: "7", 4: "11", 5: "4"}
  recommended: {false: "17", true: "30"}
}
*/
