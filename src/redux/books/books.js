const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat([action.payload]);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
      // ? { ...book, author: !book.author } : book));
    default:
      return state;
  }
};
