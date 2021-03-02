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
              <th></th>
              <th>Compared Product Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Green Leaf Certified</td>
              <td></td>
            </tr>
            <tr>
              <td>Cashmere</td>
              <td>Fabric</td>
              <td>100% Cotton</td>
            </tr>
            <tr>
              <td></td>
              <td>Lifetime Guarantee</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Satisfaction Guaranteed</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Non-GMO</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Modal;
