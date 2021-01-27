import React, { useContext } from 'react';
import CouponContext from './context/CouponContext';
import { FALSE } from './context/constants';
import messages from './context/messages';

const CouponDetails = ({ couponId }) => {
  const couponContext = useContext(CouponContext);
  const { allCoupons, setShowCouponDetails, alert, setAlert } = couponContext;
  const coupon = allCoupons[couponId];

  const performReturn = (e) => {
    e.preventDefault();
    setShowCouponDetails(FALSE);
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(coupon.code);
    setAlert(messages.COPIED);
  };

  return (
    <div>
      <button className="btn-back" onClick={performReturn}>
        Back
      </button>
      <div className="coupon-details-container">
        <p className="copy-text">{alert}</p>
        <h3>{coupon.name}</h3>
        <p>{coupon.description}</p>
        <h4>CODE: '{coupon.code}'</h4>
        <button className="copy-btn" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default CouponDetails;
