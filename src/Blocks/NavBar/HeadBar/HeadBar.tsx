import { Stack, Box, useMediaQuery } from "@mui/material";
import { GoPerson } from "react-icons/go";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import MainLogo from "../../../Components/MainLogo/MainLogo";
import { BsHeart } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import { CgMenuRound } from "react-icons/cg";
import { Link } from "react-router-dom";

type Props = {
  setDrawerOpen: (open: boolean) => void;
};

const HeadBar = ({ setDrawerOpen }: Props) => {
  // check screen width by mui query
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={{ xs: "1rem 3rem", md: "1rem 5rem" }}
    >
      {/* Logo */}
      <Link to="/">
        <MainLogo color="#536B2F" />
      </Link>
      {/* Search Bar */}
      {!matches && <SearchBar />}
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
        {matches ? (
          <CgMenuRound fontSize={"2rem"} onClick={() => setDrawerOpen(true)} />
        ) : (
          <>
            <Link to="/">
              <GoPerson />
            </Link>
            <Link to="/">
              <BsHeart />
            </Link>
            <Link to="/cart">
              <SlHandbag />
            </Link>
          </>
        )}
      </Box>
    </Stack>
  );
};

export default HeadBar;
