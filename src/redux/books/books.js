import { fetchBooks, postBook, deleteBook } from '../API';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS ';

const initialState = [];
const arrangeBooks = (books) => books.sort((x, y) => ((x.title > y.title) ? 1 : -1));

const getBooks = () => async (dispatch) => {
  const result = await fetchBooks();
  const books = Object.entries(result).map(([bookId, [book]]) => ({
    id: bookId,
    title: book.title,
    author: book.author,
    category: book.category,
  }));
  dispatch({
    type: GET_BOOKS,
    payload: arrangeBooks(books),
  });
};

const addBook = (payload) => async (dispatch) => {
  await postBook(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const booksReducer = ((state = initialState, action) => {
  const books = [...state, action.payload];
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return arrangeBooks(books);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
});

export { addBook, removeBook, getBooks };
export default booksReducer;
