// import React from "react";
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

// eslint-disable-next-line react/prop-types
const Cover = ({ theme, setTheme }) => {
  let icono = theme === "light" ? <BsSun /> : <BsMoon />;
  return (
    <>
      <CoverContainer id="home">
        <CoverWrapper>
          <InfoContainer>
            <ProfilePicture src="/src/assets/profile_picture.jpeg" />
            <InfoProfile>
              <h2>Hola, soy Adrián 👋</h2>
              <h1>Desarrollador Full-Stack</h1>
              <p>Soy tremendamente crack, los que conocen saben</p>
              <Docs>
                <CV href="src/assets/CV_PerezAdrian.pdf" target="_blank">
                  Curriculum <FaSheetPlastic className="sheetPlastic" />
                </CV>
                <Portfolio>
                  Portafolio <FaArrowRight className="animatedArrow" />
                </Portfolio>
              </Docs>
            </InfoProfile>
          </InfoContainer>
        </CoverWrapper>
        <About />
        <Projects />
        <Navbar icono={icono} theme={theme} setTheme={setTheme} />
      </CoverContainer>
    </>
  );
};

export default Cover;
