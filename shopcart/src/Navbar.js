import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar({ totalItems }) {
  return (
    <header className="bg-primary text-white text-center py-4 mb-4">
      <h1>
        <Link to="/" className="text-white">
          Shop 2 React
        </Link>
      </h1>
      <div>
        <Link to="/cart" className="text-white">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          <span>{totalItems} items</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
