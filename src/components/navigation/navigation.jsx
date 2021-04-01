import PropTypes from "prop-types";

const Navigation = ({ onPageChange, pages }) => {
  return (
    <header className="row">
      <h2 className="text-muted">Company</h2>
      <nav className="mt-3">
        <ul className="nav nav-pills flex-column flex-sm-row">
          <li className="nav-item">
            <button
              className={`nav-link ${pages.homePage ? "active" : ""}`}
              onClick={() => onPageChange("homePage")}
            >
              Home Page
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${pages.todoHome ? "active" : ""}`}
              onClick={() => onPageChange("todoHome")}
            >
              Todo Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${pages.counter ? "active" : ""}`}
              onClick={() => onPageChange("counter")}
            >
              Counter
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
};

export default Navigation;
