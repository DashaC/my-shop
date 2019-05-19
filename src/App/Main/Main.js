import React from 'react';

import ProductsList from './Products/ProductsList';
import { Route } from 'react-router';
import CartPage from './CartPage/CartPage';
import PaymentPage from './PaymentPage/PaymentPage';
import ShippingPage from './ShippingPage/ShippingPage';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            Filter...
          </div>
          <div className="col-lg-9">
            
            <Route path='/cart' component={CartPage} />  
            <Route path='/payment' component={PaymentPage} />
            <Route path='/shipping' component={ShippingPage} />
            <Route exact path='/' component={ProductsList} />
          </div>
        </div>
      </div>
    </main>
  )
};

export default Main;