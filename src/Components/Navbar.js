import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navContainer">
    <h2>Bookstore CMS</h2>
    <ul className="nav">
      <li>
        <Link to="/" className="link">
          BOOKS
        </Link>
      </li>
      <li>
        <Link to="/Categories" className="link">
          CATEGORIES
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
