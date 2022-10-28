// import React, { Children } from "react";
// import "./Custom-button.style.jsx";
import { FC, ButtonHTMLAttributes } from "react";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./Custom-button.style";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (butonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[butonType]);

export type CustomButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: FC<CustomButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const Button = getButton(buttonType);

  return (
    <Button disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </Button>
  );
};

export default CustomButton;
