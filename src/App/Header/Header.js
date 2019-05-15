import React from 'react';

import './header.css';
import './cart.css';
import './menu.css';

import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Logo />
          </div>
          <div className="col-lg-6">
            <div className="menu">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Payment</a></li>
                <li><a href="">Shipping</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cart text-center">
              <div className="products-count">0</div>
              <div className="products-price">0$</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;