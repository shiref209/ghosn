import { Box, Stack } from "@mui/material";
import React from "react";
import NavBar from "../../Blocks/NavBar/NavBar";
import Categories from "../../Blocks/Categories/Categories";
import AllCategoriesSection from "../../Blocks/AllCategoriesSection/AllCategoriesSection";

const AllCategories = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="column" gap="3rem">
        {/* Categories */}
        <Categories />
        {/* best selling */}
        <AllCategoriesSection title="الأكثر مبيعًا" />
        {/* Just arrived */}
        <AllCategoriesSection title="وصل حديثًا" />
      </Stack>
    </Box>
  );
};

export default AllCategories;
