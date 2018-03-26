import React from "react";
import "./styles.css";

const Card = ({
  cardWrap,
  imgWrap,
  src,
  alt,
  textWrap,
  title,
  text,
  price
}) => (
  <div className={cardWrap}>
    <div className={imgWrap}>
      <img src={src} alt={alt} />
    </div>
    <div className={textWrap}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    <form action="/example/">
      <button type="submit">${price}</button>
    </form>
  </div>
);

export default Card;
