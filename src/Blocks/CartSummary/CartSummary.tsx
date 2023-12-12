import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { CustomButton } from "../../Components/UI/CustomButton/CustomButton";
const CartSummary = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bgcolor="#FFF"
      boxShadow={"0px 0px 4px 4px rgba(226, 231, 217, 0.25)"}
      height="50vh"
      fontSize={"24px"}
      fontWeight={"400"}
    >
      {/* content */}
      <Box>
        <Typography textAlign={"center"} mb={"1rem"}>
          ملخص الطلبية
        </Typography>
        <Divider />
        <Box display="flex" flexDirection="column" gap="1.5rem" mt={"2rem"}>
          {/* price */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography>السعر :</Typography>
            <Typography fontWeight="600">18 جنيه</Typography>
          </Box>
          {/* shipping */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography>مصاريف الشحن :</Typography>
            <Typography fontWeight="600">18 جنيه</Typography>
          </Box>
          {/* total */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography>الإجمالي :</Typography>
            <Typography fontWeight="600">18 جنيه</Typography>
          </Box>
        </Box>
      </Box>
      {/* confirm order */}
      <CustomButton>تأكيد الطلب</CustomButton>
    </Box>
  );
};

export default CartSummary;
