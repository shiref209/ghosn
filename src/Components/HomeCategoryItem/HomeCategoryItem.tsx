import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  alt: string;
  id: number;
};

const HomeCategoryItem = ({ img, title, alt, id }: Props) => {
  return (
    <Link to={`/categories/${alt}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Box
          sx={{
            background: `url(${img}) no-repeat center`,
            backgroundSize: "contain",
            width: { xs: "150px", sm: "200px" },
            height: { xs: "150px", sm: "200px" },
            borderRadius: "50%",
            backgroundColor: "#F3F3F3",
            fontFamily: "Cairo",
          }}
        >
          {/* <img src={img} alt={alt} height="200px" width="200px" /> */}
        </Box>

        <Typography variant="h4" color="#4A4844" textAlign="center">
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

export default HomeCategoryItem;
