import React from "react";
import "./styles.css";

const Card = ({ cardWrap, imgWrap, src, alt, textWrap, title, text }) => (
  <div className={`card-wrap ${cardWrap}`}>
    <div className={`card-img-wrap ${imgWrap}`}>
      <img src={src} alt={alt} />
    </div>
    <div className={`card-text-wrap ${textWrap}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default Card;
