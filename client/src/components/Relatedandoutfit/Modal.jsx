/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(e) {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal" onClick={(e) => {this.onClick(e)}}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
          <h3>COMPARING</h3>
            <table>
              <thead>
                <tr>
                  <th>{this.props.name}</th>
                  <th />
                  <th>{this.props.relatedName}</th>
                </tr>
              </thead>
              <TableBody features={this.props.features} relatedFeatures={this.props.relatedFeatures} />
            </table>
            <button className="toggle-button" onClick={(e) => {this.onClick(e)}}>
              close
            </button>
          </div>
      </div>
    );
  }
}

const TableBody = function({features, relatedFeatures}) {
  const comparisonBuild = function (array1, array2) {
    const result = {};
    array1.forEach((element) => {
      const value = element.value || true;
      result[element.feature] = [value, null];
    });
    array2.forEach((element) => {
      if (result[element.feature]) {
        const value = element.value || true;
        result[element.feature][1] = value;
      } else {
        const value = element.value || true;
        result[element.feature] = [null, value];
      }
    });
    return result;
  };
  let comparison = {};
  if (features && relatedFeatures) {
    comparison = comparisonBuild(features, relatedFeatures);
  }
  if (Object.keys(comparison).length === 0) {
    return <tbody />;
  }
  return (
    <tbody>
      {Object.keys(comparison).map((feature) => (
        <tr key={feature}>
          {comparison[feature][0] ? (typeof comparison[feature][0] === 'boolean') ? <td>✓</td> : <td>{comparison[feature][0]}</td> : <td />}
          <td>{feature}</td>
          {comparison[feature][1] ? (typeof comparison[feature][1] === 'boolean') ? <td>✓</td> : <td>{comparison[feature][1]}</td> : <td />}
        </tr>
      ))}
    </tbody>
  );
};

export default Modal;
