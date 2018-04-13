import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

// determine the number of stars to render
const numberOfStars = (rating, iconClass) =>
  Array.from({ length: rating }, (rating, index) => (
    <i
      key={index}
      style={{ "--starIndex": index }}
      className={`fas fa-star star ${iconClass}`}
    />
  ));

const Stars = ({ className, iconClassName, rating }) => (
  <ul className={`stars-list  ${className}`}>
    {numberOfStars(rating, iconClassName)}
  </ul>
);

Stars.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  rating: PropTypes.number.isRequired
};

export default Stars;
