import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  CoverContainer,
  CoverWrapper,
  InfoContainer,
  Docs,
  ProfilePicture,
  InfoProfile,
  CV,
  Portfolio,
} from "./Cover.elements";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import profile_picture from "../../assets/profile_picture.jpeg";
import CV_PerezAdrian from "../../assets/CV_PerezAdrian.pdf";

const Cover = ({ theme, setTheme }) => {
  let icono = theme === "light" ? <BsSun /> : <BsMoon />;

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("project");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = Math.min(Math.abs(distance) * 0.5, 1200);
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <>
      <CoverContainer id="home">
        <CoverWrapper>
          <InfoContainer>
            <ProfilePicture src={profile_picture} />
            <InfoProfile>
              <h2>Hola, soy Adrián 👋</h2>
              <h1>Desarrollador Full-Stack</h1>
              <Docs>
                <CV href={CV_PerezAdrian} target="_blank">
                  Curriculum <FaSheetPlastic className="sheetPlastic" />
                </CV>
                <Portfolio onClick={handlePortfolioClick} style={{ cursor: "pointer" }}>
                  Portafolio <FaArrowRight className="animatedArrow" />
                </Portfolio>
              </Docs>
            </InfoProfile>
          </InfoContainer>
        </CoverWrapper>
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Navbar icono={icono} theme={theme} setTheme={setTheme} />
      </CoverContainer>
    </>
  );
};

export default Cover;
