import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, products }) {
  const cartItems = products.filter(product => cart[product.id] > 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul className="list-group">
            {cartItems.map(product => (
              <li key={product.id} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={product.image} alt={product.desc} style={{ width: '50px' }} />
                    <span>{product.desc}</span>
                  </div>
                  <span>Quantity: {cart[product.id]}</span>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/signin" className="btn btn-primary mt-3">Check Out</Link>
        </>
      ) : (
        <div>
          <p>Your cart is empty. (0 items)</p>
          <Link to="/" className="btn btn-primary">Continue Shopping</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
