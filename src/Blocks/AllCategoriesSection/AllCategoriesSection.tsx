import React from "react";
import SectionLayout from "../../Components/UI/SectionLayout/SectionLayout";
import { Box, Typography } from "@mui/material";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
type Props = {
  title: string;
};
const AllCategoriesSection = ({ title }: Props) => {
  return (
    <SectionLayout>
      <Typography variant="h3" color="#476A11" fontFamily="Cairo">
        {title}
      </Typography>
      {/* Items */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap="2.5rem"
      >
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </Box>
    </SectionLayout>
  );
};

export default AllCategoriesSection;
