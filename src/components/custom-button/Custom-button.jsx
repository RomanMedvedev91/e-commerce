// import React, { Children } from "react";
import "./Custom-button.style.jsx";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Custom-button.style.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (butonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[butonType]);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const Button = getButton(buttonType);

  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
