import React, { useState, useContext } from 'react';
import spinner from './spinner.svg';
import CouponContext from './context/CouponContext';
const Login = () => {
  const couponContext = useContext(CouponContext);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setLoginStatus, networkError } = couponContext;

  const performLogin = () => {
    setIsLoading(true);
    setLoginStatus(username);
    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <input
        className="user-info"
        placeholder="Enter User name"
        onChange={(e) => setUsername(e.target.value)}
      />
      {isLoading ? (
        <img alt="spinner" src={spinner} />
      ) : (
        <button className="to-login" onClick={performLogin}>
          Login
        </button>
      )}
      <div className="error-msg">{networkError}</div>
    </div>
  );
};

export default Login;
