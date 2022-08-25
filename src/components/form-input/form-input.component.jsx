import React from "react";
import "./form-input.scss";

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && <label className={`${otherProps.value.length ? "shrink" : null} form-input-label`}>{label}</label>}
    </div>
  );
}
