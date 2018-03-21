import React from "react";
import "./styles.css";

const Input = ({
  inputWrap,
  label,
  inputType,
  placeholder,
  icon = null //font-awesome icons
  // value
  // onChange
}) => (
  <div className={`input-container ${inputWrap}`}>
    <label htmlFor={label}>{label}</label>
    <input
      type={inputType}
      id={label}
      placeholder={placeholder}
      /*onChange, value */

      required
    />
    {icon === null ? null : <i className={icon} />}
  </div>
);

export default Input;
