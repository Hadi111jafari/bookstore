import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const NavBar = () => (
  <nav className="navContainer">
    <div className="nav">
      <h1 className="appName">Bookstore CMS</h1>
      <ul className="links">
        <li>
          <Link to="/Books" className="link">
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
    <div className="oval">
      <Icon className="icon" icon="bi:person-fill" />
    </div>
  </nav>
);

export default NavBar;
