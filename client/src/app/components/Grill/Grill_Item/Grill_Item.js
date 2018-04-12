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
    <div className="grill">
      <div className="grill-overview">
        <div className="grill-image">
          <img
            className="grill-img"
            src={grill.image}
            alt={`thumbnail of ${grill.name}`}
          />
        </div>
        <div className="star-rating">{numberOfStars(grill.rating)}</div>
      </div>
      <div className="grill-detail">
        <div className="grill-name">{grill.name}</div>
        <ul className="features-list">
          {grill.features.map(feature => (
            <li className="feature" key={feature.main}>
              {feature.main}
            </li>
          ))}
        </ul>
      </div>
      <div className="cost">
        {grill.price_per_hour}
        <span className="timeframe">per hour</span>
      </div>
    </div>
  </Link>
);

export default GrillItem;
