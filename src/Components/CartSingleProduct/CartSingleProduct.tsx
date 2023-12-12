import React from "react";
import { Box, Typography } from "@mui/material";
import truck1 from "../../assets/images/truck1.png";
import truck2 from "../../assets/images/truck2.png";
import image from "../../assets/images/popcorn.png";

import { FaStar, FaRegStar } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import AddToCart from "../AddToCart/AddToCart";
const CartSingleProduct = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1.5rem"
      padding="1rem"
      bgcolor="#FFF"
      position="relative"
      boxShadow={"0px 0px 4px 4px rgba(226, 231, 217, 0.25)"}
    >
      {/* delete icon */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "#F5312E",
          "&:hover": {
            backgroundColor: "#bcb5b5",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          },
        }}
      >
        <RiDeleteBin5Line size="20" />
      </Box>
      <Box display="flex" flexDirection="row" gap="2rem">
        {/* Product image */}
        <img src={image} height="100%" width="200px" />
        {/* Product content container */}
        <Box display="flex" flexDirection="column" gap="1.5rem">
          {/* title */}
          <Typography variant="body2" fontWeight="600" fontFamily="Cairo">
            فشار أبو عوف بالكراميل والقرفة 100 جرام
          </Typography>
          {/* price */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              fontWeight="600"
              display="inline"
              color="#2C742F"
            >
              18 جنيه{" "}
            </Typography>
            <Typography
              variant="body1"
              fontWeight="600"
              fontFamily="Cairo"
              color="#B3B3B3"
              display="inline"
              sx={{
                textDecoration: "line-through",
              }}
            >
              26.00 جنيه
            </Typography>
            {/* Discount */}
            <Box
              sx={{
                backgroundColor: "rgba(234, 75, 72, 0.10)",
                borderRadius: "4px",
                color: "#EA4B48",
                display: "inline",
                padding: "0 0.5rem",
              }}
            >
              <Typography
                variant="body1"
                fontWeight="500"
                color="#EA4B48"
                display="inline"
              >
                9% -
              </Typography>
            </Box>
          </Box>
          {/* reviews number */}
          <Box color="#FFD70D">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <Typography
              variant="body1"
              fontWeight="400"
              display="inline"
              ml="5px"
              color="#666"
            >
              4 تقييمات
            </Typography>
          </Box>

          {/* add to cart */}
          <AddToCart isCart={true} />
        </Box>
      </Box>
      {/* delivery */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#F0F9E1",
          padding: "5px 0",
        }}
      >
        {/* truck 1 */}
        <Box display="flex" alignItems="center" gap="5px">
          <img src={truck1} alt="truck icon" width="25px" height="25px" />
          <Typography
            variant="body1"
            fontWeight="400"
            color="#656565"
            display="inline-block"
          >
            يمكنك شراء هذا المنتج <strong>بدون رسوم شحن</strong>
          </Typography>
        </Box>
        {/* truck 2 */}
        <Box display="flex" alignItems="center" gap="5px">
          <img src={truck2} alt="truck icon" width="25px" height="25px" />
          <Typography
            variant="body1"
            fontWeight="400"
            color="#656565"
            display="inline-block"
          >
            يصلك خلال <b>3 ساعات</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartSingleProduct;
