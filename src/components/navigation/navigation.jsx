import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
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
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func,
  pages: PropTypes.object,
};

export default Navigation;
