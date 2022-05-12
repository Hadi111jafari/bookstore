import { useDispatch, useSelector } from 'react-redux';
import { categoriesCreator } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(categoriesCreator())}>Check Status</button>
      <div>{status}</div>
    </div>
  );
}

export default Categories;
