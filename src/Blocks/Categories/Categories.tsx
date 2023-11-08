import React from "react";
import SectionLayout from "../../Components/UI/SectionLayout/SectionLayout";
import { Typography, Box, Divider } from "@mui/material";
import { categories } from "../HomeCategories/categories-data";
import CategoryItem from "../../Components/HomeCategoryItem/HomeCategoryItem";

const Categories = () => {
  return (
    <SectionLayout>
      <Typography variant="h3" color="#476A11" fontFamily="Cairo">
        الفئات
      </Typography>
      {/* Categories */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "1rem",
          gap: "2.5rem",
          overflowX: "hidden",
          overflowY: "hidden",
          ":hover": {
            overflowX: "auto",
          },
        }}
      >
        {categories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "rgba(101, 101, 101, 0.26)",
        }}
      />
    </SectionLayout>
  );
};

export default Categories;
