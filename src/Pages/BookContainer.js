import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from '../Components/BooksList';
import InputBook from '../Components/InputBook';

const BookContainer = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <BooksList
        books={books}
      />
      <InputBook />
    </div>
  );
};

export default BookContainer;
