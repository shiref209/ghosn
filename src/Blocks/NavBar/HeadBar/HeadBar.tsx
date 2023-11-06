import { Stack, Box } from "@mui/material";
import { GoPerson } from "react-icons/go";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import MainLogo from "../../../Components/MainLogo/MainLogo";
import { BsHeart } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";

const HeadBar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={{ bsm: "1rem 3rem", md: "1rem 5rem" }}
    >
      {/* Logo */}
      <Link to="/">
        <MainLogo color="#536B2F" />
      </Link>
      {/* Search Bar */}
      <SearchBar />
      {/* Icons */}
      <Box
        sx={{
          display: "flex",
          direction: "row",
          gap: "1rem",
          fontSize: "1.5rem",
          color: "#476A11",
        }}
      >
        <GoPerson />

        <BsHeart />
        <SlHandbag />
      </Box>
    </Stack>
  );
};

export default HeadBar;
