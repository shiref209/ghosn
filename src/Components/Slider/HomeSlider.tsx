import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselSlider from "./CarouselSlider";
import { styled } from "@mui/material";

const HomeSlider = () => {
  return (
    <CarouselWrapper className="carousel-container">
      <CarouselProvider
        visibleSlides={1}
        totalSlides={3}
        step={1}
        currentSlide={1}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
      >
        <CarouselSlider />
      </CarouselProvider>
    </CarouselWrapper>
  );
};

export default HomeSlider;

const CarouselWrapper = styled("div")({
  "&.carousel-container": {
    margin: "12px auto",
    maxWidth: 600,
    filter: "drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2))",
    "@media (max-width: 630px)": {
      display: "none",
    },
    "@media (min-width: 832px)": {
      maxWidth: 732,
    },

    "@media (min-width: 1088px)": {
      maxWidth: 960,
    },

    "@media (min-width: 1272px)": {
      maxWidth: 1152,
    },

    "@media (min-width: 1504px)": {
      maxWidth: 1344,
    },
  },

  ".carousel__inner-slide": {
    width: "calc(100% - 16px)",
    marginLeft: 8,

    "@media (min-width: 1272px)": {
      width: "calc(100% - 24px)",
      marginLeft: 12,
    },

    // '@media (min-width: 1272px)': {
    //   width: 'calc(100% - 32px)',
    //   marginLeft: 16,
    // },
  },
});
