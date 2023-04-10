import React, { FC, ButtonHTMLAttributes } from "react";
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button.styles.jsx";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google",
  inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => {
  const obj = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };
  return obj[buttonType];
};

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
  handleClick?: () => {};
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, buttonType, handleClick, isLoading }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} onClick={handleClick}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
