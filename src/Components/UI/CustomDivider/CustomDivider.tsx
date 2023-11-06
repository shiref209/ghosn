import React from "react";
import { Divider } from "@mui/material";

type Props = {
  direction: String;
};

const CustomDivider = ({ direction }: Props) => {
  return (
    <Divider
      sx={{
        height: "20px",
        width: "20%",
        backgroundColor: "#A9291F",
        borderTopRightRadius: direction === "right" ? "9px" : "0px",
        borderBottomRightRadius: direction === "right" ? "9px" : "0px",
        borderTopLeftRadius: direction === "left" ? "9px" : "0px",
        borderBottomLeftRadius: direction === "left" ? "9px" : "0px",
      }}
    />
  );
};

export default CustomDivider;
