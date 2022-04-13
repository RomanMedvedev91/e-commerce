// import React from "react";

import { FormImputLabel, Input, Group } from "./Form-input.style.jsx";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <Input onChange={handleChange} {...otherProps} />
      {label && (
        <FormImputLabel shrink={otherProps.value.length}>
          {label}
        </FormImputLabel>
      )}
    </Group>
  );
};

export default FormInput;
