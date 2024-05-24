import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DisplayProducts({ products, cart, handleQuantityChange, handleShowProduct, handleAdd, handleSubtract }) {
  return (
    <div className="list-group">
      {products.map(product => (
        <div className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
          <div className="d-flex align-items-center">
            <img
              src={product.image}
              alt={product.desc}
              style={{ width: '100px', cursor: 'pointer' }}
              onClick={() => handleShowProduct(product)}
              className="mr-3"
            />
            <div>
              <h5>{product.desc}</h5>
              <p>Ratings: {product.ratings}</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-secondary mr-2" onClick={() => handleSubtract(product.id)}>-</button>
            <input
              type="number"
              value={cart[product.id] || 0}
              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
              className="form-control"
              style={{ width: '60px' }}
              min="0"
            />
            <button className="btn btn-secondary ml-2" onClick={() => handleAdd(product.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductModal({ product, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.desc}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} className="img-fluid" alt={product.desc} />
        <p>{product.note}</p>
        <p>Ratings: {product.ratings}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export { DisplayProducts, ProductModal };
