import React from "react";
import image from "../../../assets/images/Rectangle 43.png";
import discountBadge from "../../../assets/images/icon.png";
import { Box, Typography } from "@mui/material";
const SliderItem = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "600px",
        paddingTop: "35px",
        "::before": {
          //   content: "''",
          content: `url('${discountBadge}')`,
          //   background: `url('${discountBadge}') , lightgray 50% / cover no-repeat`,

          border: "5px solid #fff",
          background: "#fff",
          borderRadius: "50%",
          position: "absolute",
          top: "0",
          left: "-2px",
          width: "100px",
          height: "100px",
          zIndex: "1",
        },
      }}
    >
      <Box
        sx={{
          backgroundSize: "cover",
          background: `linear-gradient(90deg, rgba(26, 26, 26, 0.40) 42.1%, rgba(65, 76, 48, 0.68) 58.04%, rgba(92, 112, 63, 0.88) 69.18%, #41581F 93.63%), url('${image}') no-repeat center`,
          height: "100%",
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          paddingLeft: "2rem",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "#fff",
        }}
      >
        <Typography variant="h2">
          يمكنك الان تحضير طبق السلطة المفضل لديك
        </Typography>

        <Typography variant="h2" lineHeight="4rem">
          بخصومات تصل ل
          <Typography
            variant="h2"
            color="#E5C72E"
            lineHeight="0"
            display="inline"
            ml="5px"
          >
            30%
          </Typography>
          <br />
          على جميع الفواكه والخضروات
        </Typography>
      </Box>
      {/* <Box>
        <img
          src={discountBadge}
          alt=""
          width="100px"
          height="100px"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
      </Box> */}
      {/* <Box
        sx={{
          position: "relative",
        }}
      >
        <img
          src={image}
          alt=""
          width="100%"
          height="550px"
          style={{ position: "relative", zIndex: "-1" }}
        />
      </Box> */}
    </Box>
  );
};

export default SliderItem;
