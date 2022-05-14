import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeAction = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <li className="bookItem">
      <div className="book-info">
        <p className="bookCategory">{book.category}</p>
        <h3 className="bookTitle">{book.title}</h3>
        <p className="bookAuthor">{book.author}</p>
        <div className="action-buttons">
          <button
            type="button"
            className="button-outline"
          >
            Comments
          </button>
          <button
            type="button"
            className="button-outline"
            onClick={() => removeAction(book.id)}
          >
            Remove
          </button>
          <button
            type="button"
            className="button-outline"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="progress-container">
        <div className="circular-progress-container">
          <div className="circular-progress">
            <div className="mask full">
              <div className="fill" />
            </div>

            <div className="mask half">
              <div className="fill" />
            </div>

            <div className="inside-circle" />
          </div>
        </div>

        <div className="progress-state">
          <p className="percentage">90%</p>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="progress-divider">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 16</p>
        <button className="updateProgress-Btn" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
