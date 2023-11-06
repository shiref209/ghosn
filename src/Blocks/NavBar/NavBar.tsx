import React from "react";
import HeadBar from "./HeadBar/HeadBar";
import { Divider } from "@mui/material";
import NavigationBar from "./NavigationBar/NavigationBar";
import Drawer from "./Drawer/Drawer";

const NavBar = () => {
  return (
    <>
      {/* <Drawer /> */}
      <HeadBar />
      <Divider />
      <NavigationBar />
    </>
  );
};

export default NavBar;
