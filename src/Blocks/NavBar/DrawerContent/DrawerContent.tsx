import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import { GoPerson } from "react-icons/go";
import { BsHeart } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
type Props = {
  setDrawerOpen: (open: boolean) => void;
};
const DrawerContent = ({ setDrawerOpen }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="2rem"
      padding="2rem 1rem 0"
      onKeyDown={() => setDrawerOpen(false)}
    >
      {/* icons */}
      <Box
        display="flex"
        flexDirection="row"
        gap="5px"
        justifyContent="space-evenly"
        fontSize="2rem"
        color="#476A11"
      >
        <GoPerson />

        <BsHeart />
        <SlHandbag />
      </Box>
      {/* search bar */}
      <SearchBar isDrawer={true} />

      {/* login */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          color: "#476A11",
          textDecoration: "underline",
        }}
      >
        <Link to="/login">
          <Typography variant="h6">تسجيل الدخول</Typography>
        </Link>
        <Divider orientation="vertical" sx={{ color: "#476A11" }} flexItem />

        <Link to="/register">
          <Typography variant="h6">التسجيل</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default DrawerContent;
