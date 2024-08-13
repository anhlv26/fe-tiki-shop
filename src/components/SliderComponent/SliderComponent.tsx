import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderComponent.module.scss";
interface ArrowProps {
  className: string;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return <Box className={className} onClick={onClick} />;
};

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return <Box className={className} onClick={onClick} />;
};

const SliderComponent: React.FC = () => {
  const dataSlides = [
    {
      src: "./src/asset/images/slides/group-1/slide-1.webp",
    },
    {
      src: "./src/asset/images/slides/group-1/slide-2.webp",
    },
    {
      src: "./src/asset/images/slides/group-2/slide-1.webp",
    },
    {
      src: "./src/asset/images/slides/group-2/slide-2.webp",
    },
    {
      src: "./src/asset/images/slides/group-3/slide-1.webp",
    },
    {
      src: "./src/asset/images/slides/group-3/slide-2.webp",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <div>
        <ul
          style={{
            marginLeft: "-10px",
            padding: "0",
            width: "100%",
            marginTop: "0",
            marginBottom: "2px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // customPaging: (i:any) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //       paddingRight: "2px"
    //     }}
    //   >
    //   </div>
    // ),
    nextArrow: <NextArrow className="next-arrow" />,
    prevArrow: <PrevArrow className="pre-arrow" />,
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        padding: "16px",
        borderRadius: "8px",
        lineHeight: "0",
        overflow: "hidden",
      }}
    >
      <Slider {...settings} className={styles.slickSlider}>
        {dataSlides.map((item, index) => (
          <Box
            key={index}
            sx={{
              paddingRight: "20px",
            }}
          >
            <img
              src={item.src}
              style={{ width: "100%", borderRadius: "8px", cursor: "pointer" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent;
