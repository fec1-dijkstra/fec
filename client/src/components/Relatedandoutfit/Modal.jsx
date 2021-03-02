/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ showModal, handleCloseModal }) => {
  const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      {/* /products/productId and /products/relatedProductId .features.forEach
    render a <tr> component, if feature already exists, add cell with value */}
      <section className="modal-main">
        <h3>COMPARING</h3>
        <button type="button" onClick={handleCloseModal}>
          Close
        </button>
        <table>
          <thead>
            <tr>
              <th>Current Product Name</th>
              <th />
              <th>Compared Product Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>Green Leaf Certified</td>
              <td />
            </tr>
            <tr>
              <td>Cashmere</td>
              <td>Fabric</td>
              <td>100% Cotton</td>
            </tr>
            <tr>
              <td />
              <td>Lifetime Guarantee</td>
              <td />
            </tr>
            <tr>
              <td />
              <td>Satisfaction Guaranteed</td>
              <td />
            </tr>
            <tr>
              <td />
              <td>Non-GMO</td>
              <td />
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Modal;