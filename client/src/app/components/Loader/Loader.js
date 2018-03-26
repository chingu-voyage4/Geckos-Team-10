import React from "react";
import "./Loader.css";

const Loader = ({ message }) => {
  return (
    <div className="loader-container">
      <h1>{message}</h1>
      <div className="loader" />
    </div>
  );
};

//Add message Later <h1>{message}</h1>

export default Loader;
