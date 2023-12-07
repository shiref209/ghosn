import React from "react";
import { Box, Stack } from "@mui/material";
import Categories from "../../Blocks/Categories/Categories";
import AllCategoriesSection from "../../Blocks/AllCategoriesSection/AllCategoriesSection";
import PageLayout from "../../Components/UI/PageLayout/PageLayout";
import SingleProductBlock from "../../Blocks/SingleProduct/SingleProductBlock";

const SingleProductPage = () => {
  return (
    // <Box>
    //   <NavBar />
    <PageLayout>
      <Stack direction="column" gap="3rem">
        {/* Categories */}
        <SingleProductBlock />
        {/* best selling */}
        <AllCategoriesSection title="قد يعجبك أيضاً" />
        {/* Just arrived */}
        <AllCategoriesSection title="المزيد من أبو عوف" />
      </Stack>
    </PageLayout>
    //   <Footer />
    // </Box>
  );
};

export default SingleProductPage;
