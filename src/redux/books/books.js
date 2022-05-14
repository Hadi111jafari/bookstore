const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: '1',
    title: 'unlimited power',
    author: 'Tony Robins',
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'idk the author name',
  },
  {
    id: '3',
    title: 'Higher dimensions',
    author: 'Hadi Jafari',
  },
  {
    id: '4',
    title: 'unified theory',
    author: 'Hadi',
  },
];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = ((state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
});

export { addBook, removeBook };
export default booksReducer;
