import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navContainer">
    <h1 className="appName">Bookstore CMS</h1>
    <ul className="nav">
      <li>
        <Link to="/books" className="link">
          BOOKS
        </Link>
      </li>
      <li>
        <Link to="/categories" className="link">
          CATEGORIES
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
