import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class Body extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  renderCard() {
    const { data } = this.props;
    return data.map((item, i) => {
      return <Card key={i} data={item} />;
    });
  }
  render() {
    return (
      <div className="container-card">
        <div className="row">
          {this.props.isLoading && (
            <img
              alt="loader"
              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
              className="loader"
            ></img>
          )}
          <div className="wrap-card">{this.renderCard(this.props.data)}</div>
        </div>
      </div>
    );
  }
}

export default Body;
