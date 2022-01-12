import React from "react";
import PropTypes from "prop-types";

function Card({ data }) {
  const convertDate = (date) => {
    var dateString = new Date(date);
    var dd = String(dateString.getDate()).padStart(2, "0");
    var mm = String(dateString.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = dateString.getFullYear();

    dateString = dd + "/" + mm + "/" + yyyy;
    return dateString;
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  const { title, description, url, urlToImage, publishedAt } = data;

  return (
    <div onClick={() => openInNewTab(url)} className="card">
      <img alt="News Apps" src={urlToImage}></img>
      <div className="content">
        <div className="top">
          <h3>{title.replace(/^(.{50}[^\s]*).*/, "$1")}</h3>
          <span>{convertDate(publishedAt)}</span>
          <p>{description.replace(/^(.{120}[^\s]*).*/, "$1")}</p>
        </div>
        <div className="bottom">
          <button className="button">Baca Lengkap</button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
