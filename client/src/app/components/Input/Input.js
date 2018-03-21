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
  icon = null //font-awesome icons
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
        required
      />
      {icon === null ? null : <i className={icon} />}
    </div>
  );
};

export default Input;
