import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../redux/selectors';

const Navigation = () => {
  const authed = useSelector(authSelector);

  return (
    <header className="row">
      <h2 className="text-muted">Company</h2>
      <nav className="mt-3">
        <ul className="nav nav-pills flex-column flex-sm-row">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home page
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/todos" className="nav-link">
              Todo Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/counter" className="nav-link">
              Counter
            </NavLink>
          </li>

          {authed ? (
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
          ) : null}

          <li className="nav-item">
            <NavLink to="/faker-books" className="nav-link">
              Faker Books
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/redux-counter" className="nav-link">
              Redux Counter
            </NavLink>
          </li>

          {!authed ? (
            <li className="nav-item">
              <NavLink to="/auth" className="nav-link">
                Auth
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
