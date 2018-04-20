import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

// classNames for the icon
// 'star' is our base class for the icon
// "fill-star" is our class for default color filled star.
const defaultStar = "fa fa-star star ";
const fillStar = "fill-star ";

// determine the number of stars to render
const numberOfStars = (rating, iconClass) =>
  Array.from({ length: 5 }, (star, index) => (
    <i
      key={index}
      style={{ "--starIndex": index }}
      className={fillInStarColor(
        index,
        rating,
        defaultStar,
        fillStar,
        iconClass
      )}
    />
  ));

// determine which stars recieve a fill-in color.
// i.e where to add "fill-star" or another class name to the icon
const fillInStarColor = (
  idx,
  ratingScore,
  classN, // default class name, without filled-in color.
  fillStarClass,
  userStarClass // optional classname passed in via props.
) =>
  idx + 1 <= ratingScore ? (classN += fillStarClass + userStarClass) : classN;

// presentational component
const Stars = ({ className = "", iconClassName = "", rating }) => (
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
