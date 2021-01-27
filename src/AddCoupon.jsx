import React, { useState, useContext } from 'react';
import CouponContext from './context/CouponContext';
import categories from './Categories';

const AddCoupon = ({ onSetComponent }) => {
  const couponContext = useContext(CouponContext);
  const { addCoupons, setAlert } = couponContext;

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');

  const performAddCupon = (e) => {
    e.preventDefault();
    setAlert('');
    if (addCoupons(name, code, type, desc)) {
      onSetComponent(false);
    }
  };

  const performReturnToHome = () => {
    onSetComponent(false);
    setAlert('');
  };

  return (
    <div className="add-coupon">
      <button className="btn-back" onClick={performReturnToHome}>
        Back
      </button>
      <div className="add-form">
        <input
          className="form-elements"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name goes here"
        />
        <input
          className="form-elements"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="coupon code  goes here"
        />
        <div>
          <select
            className="form-elements"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <textarea
          className="form-elements-area"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="coupon description goes here"
        />
      </div>
      <button onClick={performAddCupon}>Submit</button>
    </div>
  );
};

export default AddCoupon;
