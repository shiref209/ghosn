import { Box } from "@mui/material";
import HomeImage from "../../Components/UI/HomeImage/HomeImage";
import HomeCategories from "../../Blocks/HomeCategories/HomeCategories";
import HomeSlider from "../../Components/Slider/HomeSlider";
import HomeOffers from "../../Blocks/HomeOffers/HomeOffers";
import SectionLayout from "../../Components/UI/SectionLayout/SectionLayout";
import Footer from "../../Blocks/Footer/Footer";
import NavBar from "../../Blocks/NavBar/NavBar";

const Home = () => {
  return (
    <Box>
      {/* NavBar */}
      <NavBar />
      {/* Main image */}
      <HomeImage />
      {/* Shop By Categories */}
      <SectionLayout>
        <HomeCategories />
        <HomeSlider />
      </SectionLayout>

      {/* <Login /> */}
      {/* <Register /> */}

      {/* Slider */}

      {/* Shop by offers */}
      <SectionLayout>
        <HomeOffers />
      </SectionLayout>
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
