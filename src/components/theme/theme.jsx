import PropTypes from "prop-types";

import "./theme.css";

function Theme({ children, type }) {
  return (
    <div className={["container-fluid p-5 border", type].join(" ")}>
      {children}
    </div>
  );
}

Theme.propTypes = {
  type: PropTypes.oneOf(["homePage", "todoHome", "counter"]).isRequired,
};

export default Theme;
