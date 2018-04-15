import React from "react";
import Stars from "../../Stars/Stars";
import { Link } from "react-router-dom";
import "./styles.css";

const GrillItem = ({ grill }) => (
  <Link to={`book-a-grill/${grill._id}`}>
    <div className="gi-grill">
      <div className="gi-grill-overview">
        <div className="gi-grill-img-wrapper">
          <img src={grill.image} alt={`thumbnail of ${grill.name}`} />
        </div>
        <Stars rating={grill.rating} />
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
        £{grill.price_per_hour}
        <span className="gi-timeframe">per hour</span>
      </div>
    </div>
  </Link>
);

export default GrillItem;
