// import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  CoverContainer,
  CoverWrapper,
  InfoContainer,
  CustomButtom,
} from "./Cover.elements";
import { BsSun, BsMoon } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Cover = ({ theme, setTheme }) => {
  let icono = theme === "light" ? <BsSun /> : <BsMoon />;
  return (
    <>
      <CoverContainer>
        <Navbar icono={icono} theme={theme} setTheme={setTheme} />
        <CoverWrapper>
          <InfoContainer>
            {icono}
            <h1>Hello</h1>
            <h1>Light Mode</h1>
            <CustomButtom>Get Started</CustomButtom>
          </InfoContainer>
        </CoverWrapper>
      </CoverContainer>
    </>
  );
};

export default Cover;
