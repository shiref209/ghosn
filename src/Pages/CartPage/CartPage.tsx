import React from "react";
import { Stack } from "@mui/material";
import PageLayout from "../../Components/UI/PageLayout/PageLayout";
import AllCategoriesSection from "../../Blocks/AllCategoriesSection/AllCategoriesSection";
import CartBlock from "../../Blocks/CartBlock/CartBlock";

const CartPage = () => {
  return (
    <PageLayout>
      <Stack direction="column" gap="3rem">
        <CartBlock />
        <AllCategoriesSection title="العناصر المفضلة" />
        <AllCategoriesSection title="شاهد العملاء أيضًا" />
      </Stack>
    </PageLayout>
  );
};

export default CartPage;
