import React from "react";
import { Box, Typography } from "@mui/material";
import CustomDivider from "../../Components/UI/CustomDivider/CustomDivider";
import SecondarySingleProduct from "../../Components/SecondarySingleProduct/SecondarySingleProduct";

const HomeOffers = () => {
  return (
    <>
      {/* Title */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <CustomDivider direction="right" />
        <Typography variant="h2" color="#476A11">
          افضل العروض
        </Typography>
        <CustomDivider direction="left" />
      </Box>
      {/* Categories */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2.5rem",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "5rem",
          alignItems: "center",
        }}
      >
        <SecondarySingleProduct />
        <SecondarySingleProduct />
        <SecondarySingleProduct />
      </Box>
    </>
  );
};

export default HomeOffers;
