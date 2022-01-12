import React from "react";
import PropTypes from "prop-types";

export default class Search extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  };

  render() {
    return (
      <div className="container-search">
        <div className="row">
          <div className="search-box">
            <h3>Pencarian</h3>
            <input
              value={this.props.value}
              onChange={(e) => this.props.onChange(e.target.value)}
              placeholder={this.props.placeholder}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
