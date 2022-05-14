import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Categories from './Pages/Categories';
import BooksContainer from './Pages/BooksContainer';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Books" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
