import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({ message }) => (
  <div className="loader-container">
    <h1>{message}</h1>
    <div className="loader" />
  </div>
);

Loader.propTypes = {
  message: PropTypes.string.isRequired
};

export default Loader;
