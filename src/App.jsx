import React, { useContext, useEffect, Fragment } from 'react';
import './app.css';
import CouponContext from './context/CouponContext';
import Login from './Login';
import Nav from './Nav';
import Coupon from './Coupon';
import Admin from './Admin';

function App() {
  const couponContext = useContext(CouponContext);
  const { isLoggedIn, getLoginStatus, isAdmin } = couponContext;

  useEffect(() => {
    getLoginStatus();
  }, []);

  let content;

  if (isLoggedIn) {
    if (isAdmin) {
      content = (
        <Fragment>
          <Nav />
          <Admin />
        </Fragment>
      );
    } else {
      content = (
        <Fragment>
          <Nav />
          <Coupon />
        </Fragment>
      );
    }
  } else {
    content = (
      <Fragment>
        <Login />
        <Coupon />
      </Fragment>
    );
  }

  return (
    <div className="App">
      <p className="header"></p>
      {content}
    </div>
  );
}

export default App;
