import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

function Body({data, isLoading}) {

  const renderCard = () => {
    return data.map((item, i) => {
      return <Card key={i} data={item} />;
    });
  };

  return (
    <div className="container-card">
      <div className="row">
        {isLoading && (
          <img
            alt="loader"
            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            className="loader"
          ></img>
        )}
        <div className="wrap-card">{renderCard(data)}</div>
      </div>
    </div>
  );
}

Body.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Body;
