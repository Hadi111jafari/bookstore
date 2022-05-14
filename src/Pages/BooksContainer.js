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
    <div className="books">
      <div className="bookList">
        <h2>Books Section</h2>
        <BookList books={books} />
      </div>
      <AddBook />
    </div>
  );
};

export default BooksContainer;
