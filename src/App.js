import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BookContainer from './Pages/BookContainer';
import Categories from './Pages/Catagories';
import handleInitialData from './redux/shared/response';
import NavBar from './Components/Navbar';
import './App.css';

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/books" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
   
  );
}

export default App;
