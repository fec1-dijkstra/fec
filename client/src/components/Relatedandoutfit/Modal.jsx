/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ showModal, handleCloseModal, name, relatedName, features, relatedFeatures }) => {
  const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';
  // const comparisonBuild = function (array1, array2) {
  //   const result = {};
  //   array1.forEach((element) => {
  //     result[element.feature] = [element.value, null];
  //   });
  //   array2.forEach((element) => {
  //     if (result[element.feature]) {
  //       result[element.feature][1] = element.value;
  //     } else {
  //       result[element.feature] = [null, element.value];
  //     }
  //   });
  //   return result;
  // };
  // let comparison = {};
  // if (features && relatedFeatures) {
  //   comparison = comparisonBuild(features, relatedFeatures);
  // }
  // if (!comparison) {
  //   return null;
  // }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3>COMPARING</h3>
        <button type="button" onClick={handleCloseModal}>
          Close
        </button>
        <table>
          <thead>
            <tr>
              <th>{name}</th>
              <th />
              <th>{relatedName}</th>
            </tr>
          </thead>
          <tbody>
            {/* {Object.keys(comparison).map((feature) => (
              <tr>
                {comparison.feature[0] ? <td>{comparison.feature[0]}</td> : <td />}
                <td>{feature}</td>
                {comparison.feature[1] ? <td>{comparison.feature[1]}</td> : <td />}
              </tr>
            ))} */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Modal;
