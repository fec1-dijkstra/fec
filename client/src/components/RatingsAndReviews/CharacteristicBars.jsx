import React from 'react';

class CharacteristicBars extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { characteristics } = this.props.meta;
    const bars = Object.keys(characteristics).map((char) => (
      <div className="char-subcontainer" key={char.id}>
        <div className="char-slider" id={char.value} />
        <RenderBar />
        <div className="char-title">{char.id}</div>
      </div>
    ));
    return <div className="char-container">{bars}</div>;
  }
}

const RenderBar = () => (
  <>
    <div className="char-segment" />
    <div className="char-segment" />
    <div className="char-segment" />
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