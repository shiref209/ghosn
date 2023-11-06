import React from "react";
import { Controller } from "react-hook-form";
import { CustomTextfield } from "../UI/CustomTextfield/CustomTextfield";
import { Control, FieldValues } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  control: any;
};
const AuthTextfield = ({ control, name, label }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={name === "phone" ? undefined : ""}
      render={({ field, fieldState: { error } }) => (
        <CustomTextfield
          error={!!error}
          color={error ? "error" : "primary"}
          helperText={error ? error.message : ""}
          label={label}
          variant="outlined"
          {...field}
        />
      )}
    />
  );
};

export default AuthTextfield;
