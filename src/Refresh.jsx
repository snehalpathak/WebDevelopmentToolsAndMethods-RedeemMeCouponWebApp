import React from 'react';
import { useContext } from 'react';
import CouponContext from './context/CouponContext';

const Refresh = () => {
  const couponContext = useContext(CouponContext);
  const { getAllCoupons } = couponContext;

  const performRefresh = (e) => {
    e.preventDefault();
    getAllCoupons();
  };

  return (
    <div>
      <button className="btn-refresh" onClick={performRefresh}>
        Refresh
      </button>
    </div>
  );
};

export default Refresh;
