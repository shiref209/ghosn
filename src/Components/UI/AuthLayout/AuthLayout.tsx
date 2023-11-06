import React from "react";
import { Box, FormControl, Typography } from "@mui/material";
import image from "../../../assets/images/Background.png";
import NavBar from "../../../Blocks/NavBar/NavBar";

type Props = { children: React.ReactNode; title: string };

const AuthLayout = ({ title, children }: Props) => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          margin: { xs: "0", md: "0 5rem 3rem" },
          background: `url(${image}) no-repeat center fixed`,
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 0",
        }}
      >
        {/* Login Form */}
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: "2rem",
            padding: { xs: "2rem 3rem 4rem", md: "2rem 4rem 4rem" },
            width: { xs: "85%", bsm: "75%", md: "50%" },
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <Typography
            variant={"h4"}
            pt="2rem"
            color="#656565"
            fontFamily="Cairo"
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {children}
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default AuthLayout;
