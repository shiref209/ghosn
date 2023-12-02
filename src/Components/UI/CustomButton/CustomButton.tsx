import { styled, Button } from "@mui/material";
export const CustomButton = styled(Button)(() => ({
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#476A11",
  width: "100%",
  padding: "7px 0",
  "&.MuiButton-root:hover": {
    backgroundColor: "#507714",
  },
}));
