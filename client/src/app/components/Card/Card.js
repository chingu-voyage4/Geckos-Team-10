import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const Card = ({
  cardWrap,
  imgWrap,
  src,
  alt,
  textWrap,
  title,
  text,
  price = null
}) => (
  <div className={`card-wrap ${cardWrap}`}>
    <div className={`card-img-wrap ${imgWrap}`}>
      <img src={src} alt={alt} />
    </div>
    <div className={`card-text-wrap ${textWrap}`}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        {price === null ? null : <div className="card-button">$ {price}</div>}
      </div>
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
