import React from "react";
import { Box, styled } from "@mui/material";

const StyledAmountButton = styled(Box)(() => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "35px",
  width: "35px",
  borderRadius: "50%",

  fontSize: "1.5rem",
  "&:hover": {
    opacity: "0.6",
    transition: "all 0.3s ease-in-out",
  },
}));
const AmountButton = (props: any) => (
  <StyledAmountButton
    sx={{
      backgroundColor: props.background,
      color: props.color,
    }}
    onClick={props.onClick}
  >
    {props.children}
  </StyledAmountButton>
);

export default AmountButton;
