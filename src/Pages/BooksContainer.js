import React from 'react';
import AddBook from '../components/InputBook';
import BookList from '../components/BooksList';

const BooksContainer = () => {
  const books = [
    {
      id: 1,
      title: 'Title',
      author: 'Author',
    },
  ];

  return (
    <div className="container">
      <div className="bookList">
        <BookList books={books} />
      </div>
      <hr />
      <AddBook />
    </div>
  );
};

export default BooksContainer;
