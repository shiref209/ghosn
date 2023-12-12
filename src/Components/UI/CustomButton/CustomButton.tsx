import { styled, Button } from "@mui/material";
export const CustomButton = styled(Button)(() => ({
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#476A11",
  width: "100%",
  padding: "7px 0",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  "&.MuiButton-root:hover": {
    backgroundColor: "#507714",
  },
}));
