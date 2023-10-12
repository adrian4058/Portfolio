/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Switch from "../Switch/Switch";
import {
  LogoName,
  NavBarContainer,
  NavBarLinks,
  NavBarLogos,
  NavBarSize,
  NavBarSwitch,
  PuntoDetail,
} from "./Navbar.elements";
import { ImMenu3 } from "react-icons/im";

const Navbar = ({ theme, setTheme }) => {
  const Links = [
    { name: "Inicio", link: "#home" },
    { name: "Sobre mi", link: "#about" },
    { name: "Logros", link: "#project" },
    { name: "Contacto", link: "#contact" },
  ];
  return (
    <NavBarContainer>
      <NavBarSize>
        <NavBarLogos>
          <LogoName>AJPerez</LogoName>
          <PuntoDetail>.</PuntoDetail>
        </NavBarLogos>
        <NavBarLinks>
          <ul className="LinksButtons">
            <li className="ListLinks"></li>
          </ul>
          <NavBarSwitch>
            <Switch theme={theme} setTheme={setTheme} />
            <ImMenu3 className="Navbar__menu" />
          </NavBarSwitch>
        </NavBarLinks>
      </NavBarSize>
    </NavBarContainer>
  );
};

export default Navbar;
