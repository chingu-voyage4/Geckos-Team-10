import React from "react";

const SubHeader = ({ className, h1, h2 }) => (
  <header className={`sub-header ${className}`}>
    <h1>{h1}</h1>
    <h2>{h2}</h2>
  </header>
);

export default SubHeader;
