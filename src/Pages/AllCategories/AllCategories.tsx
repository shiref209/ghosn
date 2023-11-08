import { Box, Stack } from "@mui/material";
import React from "react";
import NavBar from "../../Blocks/NavBar/NavBar";
import Categories from "../../Blocks/Categories/Categories";
import AllCategoriesSection from "../../Blocks/AllCategoriesSection/AllCategoriesSection";
import Footer from "../../Blocks/Footer/Footer";
import PageLayout from "../../Components/UI/PageLayout/PageLayout";

const AllCategories = () => {
  return (
    // <Box>
    //   <NavBar />
    <PageLayout>
      <Stack direction="column" gap="3rem">
        {/* Categories */}
        <Categories />
        {/* best selling */}
        <AllCategoriesSection title="الأكثر مبيعًا" />
        {/* Just arrived */}
        <AllCategoriesSection title="وصل حديثًا" />
      </Stack>
    </PageLayout>
    //   <Footer />
    // </Box>
  );
};

export default AllCategories;
