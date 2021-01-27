import React, { useContext, useState } from 'react';
import CouponContext from './context/CouponContext';
import AddCoupon from './AddCoupon';
import { NAME, CODE, TYPE, DESC, ALL, TRUE } from './context/constants';
import categories from './Categories';
import Refresh from './Refresh';

const Admin = () => {
  const couponContext = useContext(CouponContext);
  const {
    allCoupons,
    updateCoupons,
    updateCouponState,
    deleteCoupon,
    alert,
    setAlert,
    couponFilter,
  } = couponContext;
  const [isAddComponent, setIsAddComponent] = useState(false);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');

  const setAddCoupon = (e) => {
    e.preventDefault();
    setAlert('');
    setIsAddComponent(true);
  };

  const updateCouponDetails = (id, value, type) => {
    switch (type) {
      case NAME:
        updateCouponState(NAME, id, value);
        return setName(value);
      case CODE:
        updateCouponState(CODE, id, value);
        return setCode(value);
      case TYPE:
        updateCouponState(TYPE, id, value);
        return setType(value);
      case DESC:
        updateCouponState(DESC, id, value);
        return setDesc(value);
      default:
        return;
    }
  };

  const performUpdate = (e) => {
    e.preventDefault();
    updateCoupons(e.target.dataset.id, name, code, type, desc);
    setName('');
    setCode('');
    setType('');
    setDesc('');
  };

  const performDelete = (e) => {
    e.preventDefault();
    deleteCoupon(e.target.dataset.id);
  };

  const setAddComponent = (status) => {
    setIsAddComponent(status);
  };

  return (
    <div>
      {isAddComponent && <AddCoupon onSetComponent={setAddComponent} />}
      <p className="error-msg">{alert}</p>
      {!isAddComponent && (
        <div>
          <div>
            <button className="btn-add" onClick={setAddCoupon}>
              ADD
            </button>
            <Refresh />
          </div>
          <div className="admin-coupon-container">
            <div className="admin-label-container">
              <span className="header-name">Coupon Name</span>
              <span className="header-code">Code</span>
              <span className="header-label">Type</span>
              <span className="header-desc">Description</span>
            </div>
            {Object.values(allCoupons)
              .filter((coupon) =>
                couponFilter === ALL ? TRUE : coupon.type === couponFilter
              )
              .map((coupon, index) => (
                <div key={index} className="admin-list">
                  <input
                    className="coupon-items input-height"
                    data-id={coupon.couponId}
                    type="text"
                    value={coupon.name}
                    onChange={(e) =>
                      updateCouponDetails(
                        e.target.dataset.id,
                        e.target.value,
                        NAME
                      )
                    }
                  />
                  <input
                    className="coupon-items input-height"
                    data-id={coupon.couponId}
                    value={coupon.code}
                    onChange={(e) =>
                      updateCouponDetails(
                        e.target.dataset.id,
                        e.target.value,
                        CODE
                      )
                    }
                  />
                  <select
                    className="coupon-items"
                    data-id={coupon.couponId}
                    value={coupon.type}
                    onChange={(e) =>
                      updateCouponDetails(
                        e.target.dataset.id,
                        e.target.value,
                        TYPE
                      )
                    }
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <textarea
                    className="coupon-items-textarea"
                    data-id={coupon.couponId}
                    value={coupon.description}
                    onChange={(e) =>
                      updateCouponDetails(
                        e.target.dataset.id,
                        e.target.value,
                        DESC
                      )
                    }
                  />
                  <button
                    className="coupon-items btn-lg"
                    data-id={coupon.couponId}
                    onClick={performUpdate}
                  >
                    Update
                  </button>
                  <button
                    className="coupon-items btn-lg"
                    data-id={coupon.couponId}
                    onClick={performDelete}
                  >
                    X
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
