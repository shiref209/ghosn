import React from "react";
import { Box, Typography } from "@mui/material";
import mainImage from "../../../assets/images/main image.png";

const HomeImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        // marginBottom: "5rem",
      }}
    >
      <img
        src={mainImage}
        alt="muslim women shopping"
        width="100%"
        // height="500px"
      />
      {/* Typography on image */}
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          left: "8%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          color: "#FFF",
          "& h2,h4": {
            fontFamily: "Cairo",
          },
        }}
      >
        <Typography variant="h2">نقدم لكم منتجات مصرية</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="h2"> وعربية</Typography>
          <Box
            sx={{
              backgroundColor: "#476A11",
              padding: "5px 10px",
              margin: "0 10px",
            }}
          >
            <Typography variant="h2">تدعم السلام لا الحرب</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "fit-content",
            display: "inline",
            color: "#476A11",
            backgroundColor: "#FFF",
            padding: "5px 10px",
          }}
        >
          <Typography variant="h4">من أجل أهلنا في فلسطين</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeImage;
