import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './products';

function App() {
  const [cart, setCart] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: quantity,
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, qty) => total + qty, 0);
  };

  return (
    <div className="container">
      <header className="bg-primary text-white text-center py-4 mb-4">
        <h1>Shop to React</h1>
        <div>
          <span className="mr-2">🛒</span>
          <span>{getTotalItems()} items</span>
        </div>
      </header>
      <div className="row">
        {products.map(product => (
          <div className="col-md-6 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.desc} />
              <div className="card-body">
                <h5 className="card-title">{product.desc}</h5>
                <div className="d-flex align-items-center">
                  <label htmlFor={`quantity-${product.id}`} className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${product.id}`}
                    value={cart[product.id] || 0}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                    className="form-control"
                    style={{ width: '80px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
