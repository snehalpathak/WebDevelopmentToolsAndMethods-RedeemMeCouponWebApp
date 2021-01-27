import React, { useContext, useEffect } from 'react';
import CouponContext from './context/CouponContext';
import { ALL, TRUE } from './context/constants';
import messages from './context/messages';

const UserCoupons = () => {
  const couponContext = useContext(CouponContext);
  const {
    getUserCoupons,
    removeUserCoupon,
    userCoupons,
    alert,
    setShowFav,
    couponFilter,
    setAlert,
  } = couponContext;

  useEffect(() => {
    getUserCoupons();
  }, []);

  const performDelete = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    removeUserCoupon(id);
  };

  const performReturn = (e) => {
    e.preventDefault();
    setShowFav(false);
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    const coupon = userCoupons[e.target.dataset.id];
    navigator.clipboard.writeText(coupon.code);
    setAlert(messages.COPIED);
  };

  return (
    <div className="coupons-container">
      <h4 className="user-coupon-header">Saved Coupons</h4>
      <button className="btn-back" onClick={performReturn}>
        Back
      </button>
      <p className="error-msg">{alert}</p>
      <div className="coupon-container">
        {Object.values(userCoupons)
          .filter((coupon) =>
            couponFilter === ALL ? TRUE : coupon.type === couponFilter
          )
          .map((coupon, index) => (
            <div key={index} className="coupon-details">
              <button
                className="btn-delete"
                data-id={coupon.couponId}
                onClick={performDelete}
              >
                X
              </button>
              <h3 data-id={coupon.couponId}> {coupon.name}</h3>
              <h4 data-id={coupon.couponId}> CODE : '{coupon.code}'</h4>
              <p data-id={coupon.couponId}> {coupon.description}</p>
              <button
                data-id={coupon.couponId}
                className="copy-btn"
                onClick={copyToClipboard}
              >
                Copy to Clipboard
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserCoupons;
