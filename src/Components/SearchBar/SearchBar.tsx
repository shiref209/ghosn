import { Box, Button, useTheme, FilledInput } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "25%",
        height: "40px",
        display: "flex",
        direction: "row",
        borderRadius: "5px",
      }}
    >
      <FilledInput
        placeholder="البحث عن منتج"
        sx={{
          flex: 1,
          "& .MuiFilledInput-root": { textAlign: "center" },
          "& .MuiFilledInput-input": {
            paddingBottom: "20px",
          },
        }}
        disableUnderline
      />
      <Button
        sx={{
          width: "40px",
          backgroundColor: "#A9291F",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: "6px",
          borderBottomRightRadius: "6px",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          "&:hover": { opacity: 0.8, backgroundColor: "#A9291F" },
        }}
      >
        <AiOutlineSearch color="#F3F3F3" fontSize={"1.5rem"} />
      </Button>
    </Box>
  );
};

export default SearchBar;
