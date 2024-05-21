// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './products';
import Navbar from './Navbar';
import { DisplayProducts, ProductModal } from './DisplayProducts';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 0) return;
    setCart(prevCart => ({
      ...prevCart,
      [productId]: isNaN(quantity) ? 0 : quantity,
    }));
  };

  const handleAdd = (productId) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleSubtract = (productId) => {
    setCart(prevCart => {
      const newQuantity = (prevCart[productId] || 0) - 1;
      if (newQuantity < 0) return prevCart;
      return {
        ...prevCart,
        [productId]: newQuantity,
      };
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, qty) => total + qty, 0);
  };

  const handleShowProduct = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Router>
      <Navbar totalItems={getTotalItems()} />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <DisplayProducts
              products={products}
              cart={cart}
              handleQuantityChange={handleQuantityChange}
              handleShowProduct={handleShowProduct}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
            />
          } />
          <Route path="/cart" element={<Cart cart={cart} products={products} />} />
        </Routes>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} show={show} handleClose={handleClose} />
      )}
    </Router>
  );
}

export default App;
