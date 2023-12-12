import { Box, Typography } from "@mui/material";
import React from "react";
import CartSingleProduct from "../../Components/CartSingleProduct/CartSingleProduct";
import CartSummary from "../CartSummary/CartSummary";
import SectionLayout from "../../Components/UI/SectionLayout/SectionLayout";

const CartBlock = () => {
  return (
    <>
      <SectionLayout>
        <Typography variant="h3" color="#476A11" fontFamily="Cairo">
          سلة التسوق (3)
        </Typography>
      </SectionLayout>
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "#F9FDF4",
          padding: "2rem 6rem",
          display: "flex",
          flexDirection: "row",
          gap: "4rem",
        }}
      >
        {/* cart products */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flex: "3",
          }}
        >
          {/* single cart product */}
          <CartSingleProduct />
          <CartSingleProduct />
        </Box>
        {/* cart summary */}
        <Box flex="2">
          <CartSummary />
        </Box>
      </Box>
    </>
  );
};

export default CartBlock;
