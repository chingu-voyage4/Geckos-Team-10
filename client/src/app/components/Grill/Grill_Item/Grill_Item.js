import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// determine the number of stars to render
const numberOfStars = rating =>
  Array.from({ length: rating }, (rating, index) => (
    <i key={index} className="fas fa-star star-fill" />
  ));

const GrillItem = ({ grill }) => (
  <Link to={`book-a-grill/${grill._id}`}>
    <div className="gi-grill">
      <div className="gi-grill-overview">
        <div className="gi-grill-img-wrapper">
          <img src={grill.image} alt={`thumbnail of ${grill.name}`} />
        </div>
        <div className="gi-star-rating">{numberOfStars(grill.rating)}</div>
      </div>
      <div className="gi-grill-detail">
        <div className="gi-grill-name">{grill.name}</div>
        <ul className="gi-features-list">
          {grill.features.map(feature => (
            <li key={feature.main}>{feature.main}</li>
          ))}
        </ul>
      </div>
      <div className="gi-cost">
        {grill.price_per_hour}
        <span className="gi-timeframe">per hour</span>
      </div>
    </div>
  </Link>
);

export default GrillItem;
