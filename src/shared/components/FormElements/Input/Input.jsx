import React from "react";

import "./Input.scss";

const Input = ({ className, id, label, element, type, placeholder, rows }) => {
  const elementToRender =
    element === "input" ? (
      <input id={id} typ={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3} />
    );
  return (
    <div className={`form-control ${className}`}>
      <label htmlFor={id}>{label}</label>
      {elementToRender}
    </div>
  );
};

export default Input;
