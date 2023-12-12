import React from "react";
import { Box, Typography } from "@mui/material";
import truck1 from "../../../../assets/images/truck1.png";
import truck2 from "../../../../assets/images/truck2.png";

import { FaStar, FaRegStar } from "react-icons/fa";
import AddToCart from "../../../../Components/AddToCart/AddToCart";

const SingleProductDescription = () => {
  return (
    <Box width="50%" display="flex" flexDirection="column" gap="1.5rem">
      {/* title */}
      <Typography variant="h3" fontWeight="600" fontFamily="Cairo">
        فشار أبو عوف بالكراميل والقرفة 100 جرام
      </Typography>
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
          variant="body2"
          fontWeight="600"
          display="inline"
          color="#2C742F"
        >
          18 جنيه{" "}
        </Typography>
        <Typography
          variant="body2"
          fontWeight="600"
          fontFamily="Cairo"
          color="#666"
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
          }}
        >
          <Typography
            variant="body2"
            fontWeight="500"
            color="#EA4B48"
            display="inline"
          >
            خصم 9 %
          </Typography>
        </Box>
      </Box>

      {/* description text */}
      <Typography variant="body2" fontWeight="400" color="#656565">
        فشار بالكراميل والقرفة - 100 جم · يحتوي على أفضل العناصر الغذائية
        الضرورية لصحة أفضل وجسم أقوى · مليئ بالفوائد المتعددة التي تساعد على
        تسهيل سير عملية الهضم
      </Typography>
      {/* delivery */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "rgba(253, 241, 240, 0.72)",
          padding: "5px 0",
        }}
      >
        {/* truck 1 */}
        <Box display="flex" alignItems="center" gap="5px">
          <img src={truck1} alt="truck icon" width="25px" height="25px" />
          <Typography
            variant="body2"
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
            variant="body2"
            fontWeight="400"
            color="#656565"
            display="inline-block"
          >
            يصلك خلال <b>3 ساعات</b>
          </Typography>
        </Box>
      </Box>
      {/* add to cart */}
      <AddToCart />
    </Box>
  );
};

export default SingleProductDescription;
