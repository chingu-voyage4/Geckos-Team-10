import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Panel = ({ children, className, title }) => (
  <div className={`panel ${className}`}>
    <h3 className="panel-title">{title}</h3>
    {children}
  </div>
);

Panel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Panel;
