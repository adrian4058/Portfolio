import React from "react";
import Slider from "react-slick";
import { ImgIcon } from "./SliderComponent.elements";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <ImgIcon src="/src/assets/icons/node.png" />
        <ImgIcon src="/src/assets/icons/python.png" />
        <ImgIcon src="/src/assets/icons/django.png" />
        <ImgIcon src="/src/assets/icons/js.png" />
        <ImgIcon src="/src/assets/icons/ts.png" />
        <ImgIcon src="/src/assets/icons/react.png" />
        <ImgIcon src="/src/assets/icons/nextjs.webp" />
        <ImgIcon src="/src/assets/icons/Tailwind.png" />
        <ImgIcon src="/src/assets/icons/css.png" />
        <ImgIcon src="/src/assets/icons/git.png" />
        <ImgIcon src="/src/assets/icons/github.png" />
      </Slider>
    </div>
  );
};

export default SliderComponent;
