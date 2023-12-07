import React from "react";
import { Box, Typography } from "@mui/material";
import image from "../../../../assets/images/tea.png";

const SingleProductImages = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
      {/* supplementa images */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Single supp image */}
        <Box
          sx={{
            border: "1px solid #D3D1D1",
            padding: "5px",
            borderRadius: "6px",
            width: "80px",
            height: "100px",
          }}
        >
          <img src={image} alt="" width="100%" height="100%" />
        </Box>
        {/* Single supp image */}
        <Box
          sx={{
            border: "1px solid #D3D1D1",
            padding: "5px",
            borderRadius: "6px",
            width: "80px",
            height: "100px",
          }}
        >
          <img src={image} alt="" width="100%" height="100%" />
        </Box>
        {/* Single supp image */}
        <Box
          sx={{
            border: "1px solid #D3D1D1",
            padding: "5px",
            borderRadius: "6px",
            width: "80px",
            height: "100px",
          }}
        >
          <img src={image} alt="" width="100%" height="100%" />
        </Box>
      </Box>
      {/* main image */}
      <Box>
        <img src={image} alt="" width="100%" />
      </Box>
    </Box>
  );
};

export default SingleProductImages;
