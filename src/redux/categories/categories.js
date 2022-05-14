const STATUS = 'bookstore/categories/STATUS';

const initialState = [];

const status = (payload) => ({
  type: STATUS,
  payload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
export { status };
