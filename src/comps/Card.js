import React from "react";
import PropTypes from "prop-types";

// source: {
//   id, name;
// }
class Card extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  convertDate(date) {
    var dateString = new Date(date);
    var dd = String(dateString.getDate()).padStart(2, "0");
    var mm = String(dateString.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = dateString.getFullYear();

    dateString = dd + "/" + mm + "/" + yyyy;
    return dateString;
  }

  openInNewTab(url) {
    window.open(url, '_blank').focus();
   }

  render() {
    const {
      title,
      description,
      url,
      urlToImage,
      publishedAt,
    } = this.props.data;
    return (
      <div onClick={()=> this.openInNewTab(url)} className="card">
        <img alt="News Apps" src={urlToImage}></img>
        <div className="content">
          <div className="top">
            <h3>{title.replace(/^(.{50}[^\s]*).*/, "$1")}</h3>
            <span>{this.convertDate(publishedAt)}</span>
            <p>{description.replace(/^(.{120}[^\s]*).*/, "$1")}</p>
          </div>
          <div className="bottom">
            <button className="button">Baca Lengkap</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
