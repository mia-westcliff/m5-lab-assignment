import React from 'react';

function Cart({ cart, products }) {
  const cartItems = products.filter(product => cart[product.id] > 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
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
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
