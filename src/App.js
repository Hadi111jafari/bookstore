import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Catagories from './Pages/Catagories';
import Error from './Pages/Error';
import NavBar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagories" element={<Catagories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
