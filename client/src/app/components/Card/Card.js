import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const Card = ({
  cardWrap,
  imgWrap,
  src = null,
  alt,
  textWrap,
  title,
  text,
  price = null,
  pageLink = null,
  path = "/"
}) => (
  <div className={`card-wrap ${cardWrap}`}>
    <div className={`card-img-wrap ${imgWrap}`}>
      {src === null ? null : <img src={src} alt={alt} />}
    </div>
    <div className={`card-text-wrap ${textWrap}`}>
      <h3>{title}</h3>
      <p>{text}</p>
      {price === null ? null : <div className="card-button">$ {price}</div>}
      {pageLink === null ? null : (
        <div className="card-button">
          <a href={path}>{pageLink}</a>
        </div>
      )}
    </div>
  </div>
);

Card.propTypes = {
  cardWrap: PropTypes.string,
  imgWrap: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  textWrap: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number
};

export default Card;
