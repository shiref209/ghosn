import { Box, Button, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/images/Rectangle 49.png";
import { CustomButton } from "../UI/CustomButton/CustomButton";
import { BsHeart } from "react-icons/bs";
type Props = {};

const SingleOffer = (props: Props) => {
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
            bottom: "1rem",
            right: "1rem",
            backgroundColor: "#fff",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsHeart />
        </Box>
        <img src={image} alt="" width="100%" />
      </Box>
      {/* product info */}
      <Box>
        <Typography variant="h5" fontWeight="400" fontFamily="Cairo">
          صلصة طماطم الوادي
        </Typography>
        <Typography
          variant="h6"
          fontSize="18px"
          fontWeight="400"
          fontFamily="Noto Sans Arabic"
        >
          20 جنيه
        </Typography>
        <Typography
          variant="h6"
          fontSize="18px"
          fontWeight="300"
          fontFamily="Noto Sans Arabic"
          display={"inline-flex"}
        >
          بدلا من 30 جنيه
        </Typography>
        {/* Discount Percentage */}
        <Box
          sx={{
            height: "30px",
            width: "40px",
            backgroundColor: "rgba(255, 220, 197, 1)",
            display: "inline-flex",
            marginLeft: "1rem",
          }}
        >
          <Typography
            variant="h6"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Noto Sans Arabic"
            color="rgba(186, 26, 26, 1)"
            textAlign="center"
          >
            10%-
          </Typography>
        </Box>
      </Box>
      {/* add to cart */}
      <CustomButton
        sx={{ marginTop: "2rem", width: "70%", alignSelf: "center" }}
      >
        أضف لعربة التسوق
      </CustomButton>
    </Box>
  );
};

export default SingleOffer;
