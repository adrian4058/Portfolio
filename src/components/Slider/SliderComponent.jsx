import React from "react";
import Slider from "react-slick";
import { ImgIcon } from "./SliderComponent.elements";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importar imágenes locales - Lenguajes
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import python from "../../assets/icons/python.png";

// Frameworks y Librerías Frontend
import react from "../../assets/icons/react.png";
import nextjs from "../../assets/icons/nextjs.webp";

// State Management
import redux from "../../assets/icons/redux.png";
import zustand from "../../assets/icons/zustand.svg";

// Backend y Frameworks
import node from "../../assets/icons/node.png";
import django from "../../assets/icons/django.png";

// Bases de datos
import postgre from "../../assets/icons/postgre.png";

// Estilos y CSS
import css from "../../assets/icons/css.png";
import tailwind from "../../assets/icons/Tailwind.png";
import mui from "../../assets/icons/mui.png";
import boot from "../../assets/icons/boot.png";
import antdesign from "../../assets/icons/ant design.svg";

// Control de versiones
import git from "../../assets/icons/git.png";
import github from "../../assets/icons/github.png";

// Herramientas y servicios
import npm from "../../assets/icons/npm.png";
import firebase from "../../assets/icons/firebase.png";
import netlify from "../../assets/icons/netlify.png";
import render from "../../assets/icons/render.png";
import wordpress from "../../assets/icons/wordpress.png";
import hubspot from "../../assets/icons/hubspot.png";

// APIs y servicios de pago
import mercadopago from "../../assets/icons/mercadopago.png";
import stripe from "../../assets/icons/stripe.png";
import twilio from "../../assets/icons/twilio.png";
import reactleaflet from "../../assets/icons/react leaflet.svg";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {/* Lenguajes de Programación */}
        <ImgIcon>
          <img src={js} alt="JavaScript" />
        </ImgIcon>
        <ImgIcon>
          <img src={ts} alt="TypeScript" />
        </ImgIcon>
        <ImgIcon>
          <img src={python} alt="Python" />
        </ImgIcon>

        {/* Frontend Frameworks */}
        <ImgIcon>
          <img src={react} alt="React" />
        </ImgIcon>
        <ImgIcon>
          <img src={nextjs} alt="Next.js" />
        </ImgIcon>

        {/* State Management */}
        <ImgIcon>
          <img src={redux} alt="Redux" />
        </ImgIcon>
        <ImgIcon>
          <img src={zustand} alt="Zustand" />
        </ImgIcon>

        {/* Backend */}
        <ImgIcon>
          <img src={node} alt="Node.js" />
        </ImgIcon>
        <ImgIcon>
          <img src={django} alt="Django" />
        </ImgIcon>

        {/* Base de Datos */}
        <ImgIcon>
          <img src={postgre} alt="PostgreSQL" />
        </ImgIcon>

        {/* Estilos y UI */}
        <ImgIcon>
          <img src={css} alt="CSS" />
        </ImgIcon>
        <ImgIcon>
          <img src={tailwind} alt="Tailwind CSS" />
        </ImgIcon>
        <ImgIcon>
          <img src={mui} alt="Material UI" />
        </ImgIcon>
        <ImgIcon>
          <img src={boot} alt="Bootstrap" />
        </ImgIcon>
        <ImgIcon>
          <img src={antdesign} alt="Ant Design" />
        </ImgIcon>

        {/* Control de Versiones */}
        <ImgIcon>
          <img src={git} alt="Git" />
        </ImgIcon>
        <ImgIcon>
          <img src={github} alt="GitHub" />
        </ImgIcon>

        {/* Herramientas de Desarrollo */}
        <ImgIcon>
          <img src={npm} alt="npm" />
        </ImgIcon>

        {/* Servicios Cloud y Hosting */}
        <ImgIcon>
          <img src={firebase} alt="Firebase" />
        </ImgIcon>
        <ImgIcon>
          <img src={netlify} alt="Netlify" />
        </ImgIcon>
        <ImgIcon>
          <img src={render} alt="Render" />
        </ImgIcon>

        {/* CMS y Marketing */}
        <ImgIcon>
          <img src={wordpress} alt="WordPress" />
        </ImgIcon>
        <ImgIcon>
          <img src={hubspot} alt="HubSpot" />
        </ImgIcon>

        {/* APIs y Servicios */}
        <ImgIcon>
          <img src={mercadopago} alt="Mercado Pago" />
        </ImgIcon>
        <ImgIcon>
          <img src={stripe} alt="Stripe" />
        </ImgIcon>
        <ImgIcon>
          <img src={twilio} alt="Twilio" />
        </ImgIcon>
        <ImgIcon>
          <img src={reactleaflet} alt="React Leaflet" />
        </ImgIcon>
      </Slider>
    </div>
  );
};

export default SliderComponent;
