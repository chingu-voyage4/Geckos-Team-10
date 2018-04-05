import React from "react";
import "./styles.css";

const starImg = <i className="fas fa-star star-fill" />;
const Grill = ({
  grillImage,
  grillName,
  cost,
  start,
  end,
  stars,
  feature1,
  feature2
}) => (
  <div className="grill">
    <div className="grill-overview">
      <div className="grill-image">
        <img
          className="grill-img"
          src="http://pngimg.com/uploads/grill/grill_PNG13965.png"
        />
      </div>
      <div className="star-rating">
        {starImg} {stars}/5
      </div>
    </div>
    <div className="grill-detail">
      <div className="grill-name">{grillName}</div>
      <div className="grill-features">
        <ul className="features-list">
          <li className="feature">{feature1}</li>
          <li className="feature">{feature2}</li>
        </ul>
      </div>
    </div>
    <div className="cost">
      {cost}
      <span className="timeframe">per day</span>
    </div>
  </div>
);

export default Grill;
