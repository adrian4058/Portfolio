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

// eslint-disable-next-line react/prop-types
const Cover = ({ theme, setTheme }) => {
  let icono = theme === "light" ? <BsSun /> : <BsMoon />;
  return (
    <>
      <CoverContainer>
        <Navbar icono={icono} theme={theme} setTheme={setTheme} />
        <CoverWrapper>
          <InfoContainer>
            <ProfilePicture src="/src/assets/profile_picture.jpeg" />
            <InfoProfile>
              <h2>Hola, soy Adrián 👋</h2>
              <h1>Desarrollador Full-Stack</h1>
              <p>Soy tremendamente crack</p>
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
      </CoverContainer>
    </>
  );
};

export default Cover;
