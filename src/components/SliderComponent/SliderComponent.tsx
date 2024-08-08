import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderComponent.module.scss";

const SliderComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box sx={{ margin: "0 auto", width: "100%", bgcolor: "#fff" }}>
      <Slider {...settings} className={styles.slickSlider}>
        <Box>
          <Paper sx={{ textAlign: "center" }}>
            <Typography variant="h4">Slide 1</Typography>
            <Typography>This is the first slide.</Typography>
          </Paper>
        </Box>
        <Box>
          <Paper sx={{ textAlign: "center" }}>
            <Typography variant="h4">Slide 2</Typography>
            <Typography>This is the second slide.</Typography>
          </Paper>
        </Box>
        <Box>
          <Paper sx={{ textAlign: "center" }}>
            <Typography variant="h4">Slide 3</Typography>
            <Typography>This is the third slide.</Typography>
          </Paper>
        </Box>
        <Box>
          <Paper sx={{ textAlign: "center" }}>
            <Typography variant="h4">Slide 3</Typography>
            <Typography>This is the third slide.</Typography>
          </Paper>
        </Box>
      </Slider>
    </Box>
  );
};

export default SliderComponent;
