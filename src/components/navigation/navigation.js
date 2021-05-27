import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../redux/selectors';
import * as routes from '../../utils/routePaths';

const Navigation = () => {
  const authorized = useSelector(authSelector);

  return (
    <header className="row">
      <h2 className="text-muted">Company</h2>
      <nav className="mt-3">
        <ul className="nav nav-pills flex-column flex-sm-row">
          <li className="nav-item">
            <NavLink to={routes.HOME_PATH} className="nav-link" exact>
              Home page
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.TODO_PATH} className="nav-link">
              Todo Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.COUNTER_PATH} className="nav-link">
              Counter
            </NavLink>
          </li>

          {authorized ? (
            <li className="nav-item">
              <NavLink to={routes.PROFILE_PATH} className="nav-link">
                Profile
              </NavLink>
            </li>
          ) : null}

          <li className="nav-item">
            <NavLink to={routes.FAKER_BOOKS_PATH} className="nav-link">
              Faker Books
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.REDUX_COUNTER_PATH} className="nav-link">
              Redux Counter
            </NavLink>
          </li>

          {!authorized ? (
            <li className="nav-item">
              <NavLink to={routes.AUTH_PATH} className="nav-link">
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
