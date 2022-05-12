import RECEIVE_DATA from './actions';
import { books, categories } from './api';

console.log(books);

// action creators
function responseData(books, categories) {
  return {
    type: RECEIVE_DATA,
    books,
    categories,
  };
}
// thunk action creators
function handleInitialData() {
  return (dispatch) => {
    console.log(books);
    dispatch(responseData(books, categories));
  };
}

export default handleInitialData;
