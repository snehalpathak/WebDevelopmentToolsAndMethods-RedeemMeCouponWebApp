import React, { useContext, useEffect, useState } from 'react';
import UserCoupons from './UserCoupons';
import CouponContext from './context/CouponContext';
import messages from './context/messages';
import { TRUE, ALL } from './context/constants';
import CouponDetails from './CouponDetails';
import CategoryFilter from './CategoryFilter';
import Refresh from './Refresh';

const Coupon = () => {
  const couponContext = useContext(CouponContext);
  const [id, setId] = useState('');

  const {
    getAllCoupons,
    allCoupons,
    addUserCoupons,
    isLoggedIn,
    alert,
    setAlert,
    showFav,
    setShowFav,
    isCouponDetails,
    setShowCouponDetails,
    couponFilter,
  } = couponContext;

  useEffect(() => {
    getAllCoupons();
  }, []);

  const addCouponToFavorites = (e) => {
    const id = e.target.dataset.id;
    if (isLoggedIn) {
      addUserCoupons(id);
    } else {
      setAlert(messages.LOGIN_TO_SAVE);
    }
  };

  const showUserFavorites = () => {
    setShowFav(true);
  };

  const showCouponDetails = (e) => {
    const id = e.target.dataset.id;
    setId(id);
    setShowCouponDetails(TRUE);
  };

  return (
    <div>
      {!isCouponDetails && <CategoryFilter />}
      {showFav && <UserCoupons />}
      {!showFav && isCouponDetails && <CouponDetails couponId={id} />}
      {!showFav && !isCouponDetails && <Refresh />}
      {!showFav && !isCouponDetails && (
        <div className="coupons-container">
          {isLoggedIn && (
            <button onClick={showUserFavorites}>My Coupons</button>
          )}
          <p className="error-msg">{alert}</p>
          <div className="coupon-container">
            {Object.values(allCoupons)
              .filter((coupon) =>
                couponFilter === ALL ? TRUE : coupon.type === couponFilter
              )
              .map((coupon, index) => (
                <div key={index} className="coupon-details">
                  <h3 data-id={coupon.couponId}>{coupon.name}</h3>
                  <p data-id={coupon.couponId}>{coupon.description}</p>
                  <button
                    className="coupon-btn"
                    data-id={coupon.couponId}
                    onClick={showCouponDetails}
                  >
                    SHOW CODE
                  </button>
                  <button
                    data-id={coupon.couponId}
                    onClick={addCouponToFavorites}
                  >
                    SAVE
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
