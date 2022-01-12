import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="container-navbar">
        <div className="row">
          <h1>{this.props.name}</h1>
        </div>
      </div>
    );
  }
}
