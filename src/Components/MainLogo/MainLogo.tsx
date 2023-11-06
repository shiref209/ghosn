import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";

type Props = {
  color: string;
};
const MainLogo = ({ color }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography
        color={color}
        variant={"h3"}
        // fontSize={"32px"}
        fontWeight={700}
      >
        غصن الزيتون
      </Typography>
      <img src={logo} alt="logo" />
    </Box>
  );
};

export default MainLogo;
