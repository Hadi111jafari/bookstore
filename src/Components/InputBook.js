import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction } from '../redux/books/books';

const InputBook = () => {
  const [bookFeatures, setBookFeatures] = useState({
    title: '',
    author: 'unknown',
    category: '',
    completion: 0,
  });
  const dispatch = useDispatch();
  const groups = ['Action', 'Science fiction', 'Economy'];

  const handleChange = (value) => {
    if (groups.includes(value)) {
      setBookFeatures((oldState) => ({
        title: oldState.title,
        author: 'unknown',
        category: value,
        completion: 0,
      }));
    } else {
      setBookFeatures((oldState) => ({
        title: value,
        author: 'unknown',
        category: oldState.category,
        completion: 0,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title: bookFeatures.title,
      category: bookFeatures.category,
      author: bookFeatures.author,
      completion: bookFeatures.completion,
    };
    dispatch(addAction(book));
  };
  return (
    <div>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input name="title" value={bookFeatures.title} onChange={(e) => handleChange(e.target.value)} />
        <select
          placeholder="Category"
          className="select"
          value={bookFeatures.category}
          onChange={(e) => handleChange(e.target.value)}
          required
        >
          <option value="" defaultValue hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
// };

export default InputBook;
