import React, { useState } from "react";
import "./styles/input.scss";

const InputText = ({ id, name, value, label, onChange }) => {
  return (
    <div className="input-form">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onPaste={onChange}
        onFocus={onChange}
      />
    </div>
  );
};

export default InputText;
