import React from "react";
import PropTypes from "prop-types";

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
