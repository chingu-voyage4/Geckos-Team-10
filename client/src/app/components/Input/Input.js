import React from "react";
import "./styles.css";

const Input = ({
  inputWrap,
  label,
  inputType,
  name,
  placeholder,
  onChange,
  value,
  icon = null, //font-awesome icons
  touch,
  error
}) => {
  let label_on = "";
  if (value !== "") label_on = "show-label";

  return (
    <div className={`input-container ${inputWrap}`}>
      <label htmlFor={label} className={label_on}>
        {label}
      </label>
      <input
        type={inputType}
        id={label}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {icon === null ? null : <i className={icon} />}
      {touch && error && <p className="error-input">{error}</p>}
    </div>
  );
};

export default Input;
