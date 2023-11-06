import React from "react";
import SectionLayout from "../../Components/UI/SectionLayout/SectionLayout";
import { Box, Button, Typography, Stack, Divider } from "@mui/material";
import MainLogo from "../../Components/MainLogo/MainLogo";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#536B2F", padding: "2rem 0" }}>
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        padding={"1rem 5rem 0"}
        margin="3rem 0 0"
        gap="5rem"
        color="#fff"
        sx={{
          "& button": {
            color: "#fff",
            alignSelf: "flex-start",
            paddingLeft: "0px",
            "&:hover": {
              backgroundColor: "#507714",
            },
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
        >
          {/* Right Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "9rem",
              alignItems: "flex-start",
            }}
          >
            <MainLogo color="#FFF" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "#fff",
              }}
            >
              <Typography>غصن الزيتون</Typography>
              <Button>من نحن؟</Button>
              <Button>تواصل معنا</Button>
            </Box>
          </Box>
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { md: "10rem", lg: "15rem" },
            }}
          >
            {/* Customer Service */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "#fff",
              }}
            >
              <Typography>خدمة العملاء</Typography>
              <Button>كيفية الطلب</Button>
              <Button>المنتجات المسترجعة</Button>
              <Button>أسئلة شائعة</Button>
            </Box>
            {/* Follow Us */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "#fff",
              }}
            >
              <Typography
                sx={{
                  marginRight: "0px",
                }}
              >
                تابعنا على
              </Typography>
              {/* Icons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  //   justifyContent: "space-between",
                  gap: "1.5rem",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaTelegramPlane />
                <FaFacebookF />
                <AiOutlineInstagram />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Credits */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            color: "rgba(243, 243, 243, 1)",
            opacity: "0.7",
          }}
        >
          <Typography>غصن الزيتون 2023©</Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#FFF" }}
          />
          <Typography>جميع الحقوق محفوظة</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
