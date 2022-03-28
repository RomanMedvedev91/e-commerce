// import React, { Children } from "react";
import "./Custom-button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
