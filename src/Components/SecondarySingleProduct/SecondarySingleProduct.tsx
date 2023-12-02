import { Box, Button, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/images/Rectangle 49.png";
import { CustomButton } from "../UI/CustomButton/CustomButton";
import { BsHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

type Props = {};

const SecondarySingleProduct = (props: Props) => {
  return (
    <Box
      sx={{
        padding: "1rem 1rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid rgba(101, 101, 101, 0.60)",
        borderRadius: "10px",
        width: { xs: "100%", bsm: "85%", md: "33%" },
      }}
    >
      {/* product image */}
      <Box
        sx={{
          position: "relative",
        }}
      >
        {/* Favourite icon */}
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            backgroundColor: "#fff",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsHeart color="#3D2C2C" />
        </Box>
        {/* Discount label */}
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "#A9291F",
            color: "#FFF",
            padding: "0 3px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" fontWeight="400">
            خصم 20 %{" "}
          </Typography>
        </Box>
        <img src={image} alt="" width="100%" />
      </Box>
      {/* product info */}
      <Box>
        <Typography
          variant="h5"
          fontWeight="400"
          fontFamily="Cairo"
          color="#121212"
        >
          صلصة طماطم الوادي
        </Typography>
        {/* Price section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "space-between",
            padding: "1rem 0",
          }}
        >
          {/* Price before and after */}
          <Box>
            <Typography
              variant="body2"
              fontWeight="400"
              fontFamily="Noto Sans Arabic"
              display={"inline"}
              color={"#396402"}
              sx={{ fontWeight: "700" }}
            >
              30.00 جنيه
            </Typography>
            <Typography
              variant="body2"
              fontWeight="300"
              fontFamily="Noto Sans Arabic"
              color="#656565"
              display={"inline"}
              margin="0 10px"
              sx={{
                textDecorationLine: "line-through",
              }}
            >
              50.5 جنيه
            </Typography>
          </Box>

          {/* Discount Percentage */}
          <Box
            sx={{
              backgroundColor: "rgba(253, 247, 240, 0.72)",
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="body1"
              fontSize="16px"
              fontWeight="500"
              fontFamily="Noto Sans Arabic"
              color="#121212"
              textAlign="center"
            >
              4.5
            </Typography>
            {/* Star icon */}
            <Box>
              <FaStar color="#FFD70D" size={24} />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* add to cart */}
      <CustomButton
        sx={{
          marginTop: "2rem",
          width: "90%",
          alignSelf: "center",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          fontWeight: "700",
        }}
      >
        إضافة لعربة التسوق
        <Box
          ml={"1rem"}
          sx={{
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // textAlign: "center",
          }}
        >
          <SlHandbag size={20} />
        </Box>
      </CustomButton>
    </Box>
  );
};

export default SecondarySingleProduct;
