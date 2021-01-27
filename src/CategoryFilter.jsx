import React from 'react';
import categories from './Categories';
import { useContext } from 'react';
import CouponContext from './context/CouponContext';
const CategoryFilter = () => {
  const couponContext = useContext(CouponContext);
  const { couponFilter, setCategoryFilter } = couponContext;

  const setFilterbyCategory = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="category-filter">
      <label className="select-label">Select by Category: </label>
      <select value={couponFilter} onChange={setFilterbyCategory}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
