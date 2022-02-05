import React, { Children } from "react";
import "./Custom-button.scss";

export const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
};
