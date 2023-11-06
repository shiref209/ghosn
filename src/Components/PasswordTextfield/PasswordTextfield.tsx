import React, { useState } from "react";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";
import { MdOutlineVisibilityOff as VisibilityOff } from "react-icons/md";
import { MdOutlineVisibility as Visibility } from "react-icons/md";
import { Controller } from "react-hook-form";
import { CustomTextfield } from "../UI/CustomTextfield/CustomTextfield";
type Props = {
  name: string;
  control: any;
};

const PasswordTextfield = ({ name, control }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("mouse down", event.target);
  };
  return (
    <Box>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <CustomTextfield
            sx={{
              width: "100%",
            }}
            error={!!error}
            helperText={error ? error.message : ""}
            color={error ? "error" : "primary"}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="كلمة المرور"
            {...field}
          />
        )}
      />
      <Typography mt="10px" textAlign="end">
        هل نسيت كلمة السر؟
      </Typography>
    </Box>
  );
};

export default PasswordTextfield;
