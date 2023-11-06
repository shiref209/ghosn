import { Box, Typography } from "@mui/material";
import CustomDivider from "../../Components/UI/CustomDivider/CustomDivider";
import { categories } from "./categories-data";
import CategoryItem from "../../Components/HomeCategoryItem/HomeCategoryItem";

const HomeCategories = () => {
  return (
    <>
      {/* Title */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomDivider direction="right" />
        <Typography variant="h2" color="#476A11" fontFamily="Cairo">
          تسوق بالأقسام
        </Typography>
        <CustomDivider direction="left" />
      </Box>
      {/* Categories */}
      <Box
        sx={{
          marginTop: { xs: "2rem", md: "5rem" },
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            // xl: "repeat(5,1fr)",
          },

          gap: "3rem",
        }}
      >
        {categories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </Box>
    </>
  );
};

export default HomeCategories;
