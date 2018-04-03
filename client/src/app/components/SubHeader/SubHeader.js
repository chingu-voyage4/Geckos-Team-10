import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const SubHeader = ({ className, h1, h2 }) => (
  <header className={`sub-header ${className}`}>
    <h1>{h1}</h1>
    <h2>{h2}</h2>
  </header>
);

SubHeader.propTypes = {
  className: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string
};

export default SubHeader;
