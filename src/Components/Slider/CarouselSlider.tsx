import { DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { styled, Box } from "@mui/material";
import SliderItem from "../UI/SliderItem/SliderItem";

const CarouselSlider = () => {
  return (
    <Wrapper>
      <Slider>
        <Slide index={0} className="slide">
          <SliderItem />
        </Slide>
        <Slide index={1}>
          <SliderItem />
        </Slide>
        <Slide index={2}>
          <SliderItem />
        </Slide>
      </Slider>
      <div className="controls">
        <DotGroup className="dot-group" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  ".controls": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    ".btn-arrow": {
      border: "none",
      background: "none",
      padding: "11px 20px",
    },

    ".reverse-arrow": {
      transform: "rotateY(180deg)",
    },

    ".dot-group": {
      display: "flex",
      position: "absolute",
      bottom: 35,
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",

      ".carousel__dot": {
        width: 10,
        height: 9,
        border: "none",
        borderRadius: 50,
        margin: 0,
        padding: 0,
        backgroundColor: "#fff",
      },

      /* This class is found in DotGroup from pure-react-carousel */

      /* We need to override it to add our styles */

      ".carousel__dot--selected": {
        width: 25,
        height: 8,
        borderRadius: 10,
        backgroundColor: "#fff",
        transition: "background 0.4s ease",
      },
    },
  },
});

export default CarouselSlider;
