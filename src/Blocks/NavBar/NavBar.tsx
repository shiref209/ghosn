import React, { useState } from "react";
import HeadBar from "./HeadBar/HeadBar";
import { Divider, useMediaQuery, Drawer } from "@mui/material";
import NavigationBar from "./NavigationBar/NavigationBar";
import DrawerContent from "./DrawerContent/DrawerContent";

const NavBar = () => {
  // check screen width by mui query
  const matches = useMediaQuery("(max-width:600px)");
  // state to handle drawer open
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      {/* <Drawer /> */}
      <Drawer
        open={drawerOpen}
        anchor="right"
        onClose={() => setDrawerOpen(false)}
        dir="rtl"
      >
        <DrawerContent setDrawerOpen={setDrawerOpen} />
      </Drawer>
      <HeadBar setDrawerOpen={setDrawerOpen} />
      <Divider />
      <NavigationBar />
    </>
  );
};

export default NavBar;
