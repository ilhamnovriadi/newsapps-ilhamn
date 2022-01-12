import React from "react";
import PropTypes from "prop-types";

function Header({ name }) {
  return (
    <div className="container-navbar">
      <div className="row">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
