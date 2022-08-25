import React from "react";
import "./button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType, handleClick }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} onClick={handleClick}>
      {children}
    </button>
  );
}
