import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const fTitle = e.target.title.value;
    const fAuthor = e.target.author.value;

    const newBook = {
      id: uuidv4(),
      title: fTitle,
      author: fAuthor,
      category: 'General',
    };

    if (fTitle.trim() && fAuthor.trim()) {
      dispatch(addBook(newBook));
      e.target.title.value = '';
      e.target.author.value = '';
    } else {
      // eslint-disable-next-line
      alert('Please Add Book');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>ADD NEW BOOK</h2>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Book Title"
          name="title"
          id="title"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="Author"
          name="author"
          id="author"
          required
        />
        <button className="submit-Btn" type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default AddBook;
