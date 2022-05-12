import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = (props) => {
  const { books } = props;
  // console.log(books);
  // delBook = (id) => {
  //   this.setState({
  //     books: [
  //       ...this.state.books.filter((book) => book.id !== id),
  //     ],
  //   });
  // };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};
