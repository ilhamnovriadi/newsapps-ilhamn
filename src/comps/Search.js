import React from "react";
import PropTypes from "prop-types";

function Search({ value, placeholder, onChange }) {
  return (
    <div className="container-search">
      <div className="row">
        <div className="search-box">
          <h3>Pencarian</h3>
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          ></input>
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
