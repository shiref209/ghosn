import { Box } from "@mui/material";
import React from "react";
import NavBar from "../../../Blocks/NavBar/NavBar";
import Footer from "../../../Blocks/Footer/Footer";
type Props = { children: React.ReactNode };
const PageLayout = ({ children }: Props) => {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default PageLayout;
