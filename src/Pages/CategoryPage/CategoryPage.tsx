import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { categories } from "../../Helpers/categories-data";
import SectionLayout from "../../Components/UI/SectionLayout/SectionLayout";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import PageLayout from "../../Components/UI/PageLayout/PageLayout";

const CategoryPage = () => {
  const params = useParams().id;
  const title = categories.find((category) => category.alt === params)?.title;
  console.log(title);
  console.log(params);
  return (
    <PageLayout>
      <SectionLayout>
        <Typography variant="h3" color="#476A11" fontFamily="Cairo">
          {title} (15)
        </Typography>
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

            gap: "1.5rem",
          }}
        >
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
          <SingleProduct width="100%" />
        </Box>
      </SectionLayout>
    </PageLayout>
  );
};

export default CategoryPage;
