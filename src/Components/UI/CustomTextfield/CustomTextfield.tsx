import { TextField, styled } from "@mui/material";
export const CustomTextfield = styled(TextField)(() => ({
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#507714",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#507714",
    },
  },
}));
