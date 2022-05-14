import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const onClick = () => {
    dispatch(status('Under Construction'));
  };

  return (
    <div className="categories-container">
      <h2>Categories section</h2>
      <ul>
        {categories.map((catetory) => (
          <li key={1}>
            {catetory}
          </li>
        ))}
      </ul>
      <button type="button" className="check-btn" onClick={() => onClick()}>Check Status</button>
    </div>
  );
};

export default Categories;
