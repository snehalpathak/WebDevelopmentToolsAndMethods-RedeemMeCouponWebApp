import React, { useContext } from 'react';

import CouponContext from './context/CouponContext';

const Nav = () => {
  const couponContext = useContext(CouponContext);
  const { isLoggedIn, setLogout, username } = couponContext;

  const logout = (e) => {
    e.preventDefault();
    setLogout();
  };

  return (
    <div>
      <ul className="nav">
        {isLoggedIn && <li>Welcome, {username}</li>}
        {isLoggedIn && (
          <li className="logout action" onClick={logout}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
