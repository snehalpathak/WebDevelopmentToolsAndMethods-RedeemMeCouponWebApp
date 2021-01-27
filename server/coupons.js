const couponInventory = require('./couponInventory');
const { v4: uuidv4 } = require('uuid');

const coupons = couponInventory;

const readAllCoupons = () => {
    return coupons;
};

const addCoupon = (couponDetails) => {
    const couponId = uuidv4();
    coupons[couponId] = { ...couponDetails, couponId };
    return coupons[couponId];
};

const removeCoupon = (couponId) => {
    if (!coupons[couponId]) {
        return;
    }
    let coupon = coupons[couponId];
    delete coupons[couponId];
    return coupon;
};

const updateCoupon = (couponId, couponDetails) => {

    if (!coupons[couponId]) {
        return;
    }
    coupons[couponId] = { ...couponDetails, couponId };
    return coupons[couponId];
};

module.exports = {
    readAllCoupons,
    addCoupon,
    removeCoupon,
    updateCoupon,
}