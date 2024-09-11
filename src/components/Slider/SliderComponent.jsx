import React from "react";
import Slider from "react-slick";
import { ImgIcon } from "./SliderComponent.elements";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import node from "../../assets/icons/node.png";
import python from "../../assets/icons/python.png";
import django from "../../assets/icons/django.png";
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import react from "../../assets/icons/react.png";
import nextjs from "../../assets/icons/nextjs.webp";
import tailwind from "../../assets/icons/Tailwind.png";
import css from "../../assets/icons/css.png";
import mui from "../../assets/icons/mui.png";
import boot from "../../assets/icons/boot.png";
import git from "../../assets/icons/git.png";
import github from "../../assets/icons/github.png";

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
        <ImgIcon src={node} />
        <ImgIcon src={python} />
        <ImgIcon src={django} />
        <ImgIcon src={js} />
        <ImgIcon src={ts} />
        <ImgIcon src={react} />
        <ImgIcon src={nextjs} />
        <ImgIcon src={tailwind} />
        <ImgIcon src={css} />
        <ImgIcon src={mui} />
        <ImgIcon src={boot} />
        <ImgIcon src={git} />
        <ImgIcon src={github} />
      </Slider>
    </div>
  );
};

export default SliderComponent;
