import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  const obj = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };
  return obj[buttonType];
};

export default function Button({ children, buttonType, handleClick, isLoading }) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} onClick={handleClick}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
}
