import React, { InputHTMLAttributes, FC } from "react";
import { FormInputLabel, Input, Group } from "./form-input.jsx";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
