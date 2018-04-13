import React from "react";
import PropTypes from "prop-types";

const Stars = ({ className, iconClassName, rating }) => (
  <ul className={`stars-list  ${className}`}>
    {numberOfStars(rating, iconClassName)}
  </ul>
);

export default Stars;
