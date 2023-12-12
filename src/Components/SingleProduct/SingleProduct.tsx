import { Box, Typography } from "@mui/material";
import image from "../../assets/images/tea.png";
import { CustomButton } from "../UI/CustomButton/CustomButton";
import { BsHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";

type Props = { width?: string };

const SingleProduct = ({ width }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid rgba(101, 101, 101, 0.60)",
        borderRadius: "10px",
        width: { xs: "100%", bsm: "85%", md: `${width ? "100%" : "33%"}` },
        boxShadow: "0px 0px 4px 4px rgba(226, 231, 217, 0.25)",
      }}
    >
      <Link to="/product/1">
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
              top: "1.5rem",
              left: "2.5rem",
              backgroundColor: "#F9F9F9",
              height: "1.5rem",
              width: "1.5rem",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BsHeart color="#A9291F" />
          </Box>
          <img src={image} alt="" width="100%" />

          {/* Label */}
          <Box
            sx={{
              position: "absolute",
              bottom: "1rem",
              right: "0",
              // backgroundColor: "#fff",
              height: "2rem",
              width: "4rem",
              // borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#D8D8F3",
              color: "rgba(121, 76, 72, 0.78)",
            }}
          >
            <Typography variant="body1" fontWeight="400" fontFamily="Cairo">
              بقالة
            </Typography>
          </Box>
        </Box>
        {/* product info */}
        <Box padding="0 1rem">
          <Typography
            variant="h5"
            fontWeight="600"
            fontFamily="Cairo"
            color="#121212"
          >
            اسم المنتج المعروض{" "}
          </Typography>
          {/* Price before and after */}
          <Box mt="1rem">
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
              mt: "0.5rem",
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
      </Link>
      {/* add to cart */}
      <CustomButton
        sx={{
          margin: "2rem ",
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
          }}
        >
          <SlHandbag size={20} />
        </Box>
      </CustomButton>
    </Box>
  );
};

export default SingleProduct;
