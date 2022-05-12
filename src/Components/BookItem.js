import React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAction } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const deleteBook = ((e) => {
    e.preventDefault();
    dispatch(removeAction(book.id));
  });

  return (
    <div>
      <h3>
        {book.title}
      </h3>
      <br />
      <span>
        {book.author}
      </span>
      <br />
      {/* <CircularProgress
      variant="determinate"
      value={book.completion}
      color="info" size={55} /> */}
      {book.completion}
      <button
        onClick={deleteBook}
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default BookItem;
BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
