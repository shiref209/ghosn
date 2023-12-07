import React from "react";
import SectionLayout from "../../Components/UI/SectionLayout/SectionLayout";
import { Box, Typography } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";

import SingleProductImages from "./SingleProductBlock/SingleProductImages/SingleProductImages";
import SingleProductDescription from "./SingleProductBlock/SingleProductDescription/SingleProductDescription";
import { useState } from "react";
import SingleProductReviews from "./SingleProductReviews/SingleProductReviews";
import SingleProductFullDescription from "./SingleProductFullDescription/SingleProductFullDescription";
const SingleProductBlock = () => {
  const [isDescription, setIsDescription] = useState(true);
  return (
    <SectionLayout>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "5rem" }}>
        {/* Product images */}
        <SingleProductImages />
        {/* Product description */}
        <SingleProductDescription />
      </Box>
      {/* Description and reviews */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          width: "100vw",
        }}
      >
        {/* select */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            textAlign: "center",
            width: "15%",
          }}
        >
          <Typography
            width={"100%"}
            variant="h4"
            fontSize="24px"
            fontWeight="700"
            fontFamily="Cairo"
            display="flex"
            justifyContent="space-between"
            alignItems={"center"}
            onClick={() => setIsDescription(true)}
            color={isDescription ? "#121212" : "#656565"}
          >
            الوصف
            {isDescription ? <IoIosArrowBack /> : ""}
          </Typography>
          <Typography
            width={"100%"}
            variant="h4"
            fontSize="24px"
            fontWeight="700"
            fontFamily="Cairo"
            display="flex"
            justifyContent="space-between"
            alignItems={"center"}
            onClick={() => setIsDescription(false)}
            color={!isDescription ? "#121212" : "#656565"}
          >
            التقييمات
            {!isDescription ? <IoIosArrowBack /> : ""}
          </Typography>
        </Box>
        {/* Content Block */}
        <Box width="100vw" bgcolor="#F9FDF4" p="6rem 6rem">
          {isDescription ? (
            <SingleProductFullDescription />
          ) : (
            <SingleProductReviews />
          )}
        </Box>
      </Box>
    </SectionLayout>
  );
};

export default SingleProductBlock;
