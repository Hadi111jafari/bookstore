const STATUS = 'bookstore/categories/STATUS';

export const categoriesCreator = () => ({
  type: STATUS,
});

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};
