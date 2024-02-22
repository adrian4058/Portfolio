/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Switch from "../Switch/Switch";
import {
  LogoName,
  NavBarContainer,
  NavBarLinks,
  NavBarLogos,
  NavBarSize,
  NavBarSwitch,
  PuntoDetail,
  LinksButtons,
  ListLinks,
  LinksNav,
} from "./Navbar.elements";
import { ImMenu3, ImMenu4 } from "react-icons/im";

const Navbar = ({ theme, setTheme }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

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
          <LinksButtons className={`${clicked ? "active" : ""}`}>
            {Links.map((link, index) => (
              <ListLinks key={index}>
                <LinksNav href={link.link}>{link.name}</LinksNav>
              </ListLinks>
            ))}
          </LinksButtons>
          <NavBarSwitch>
            <Switch theme={theme} setTheme={setTheme} />
            {clicked ? (
              <ImMenu4 className="Navbar__menu" onClick={handleClick} />
            ) : (
              <ImMenu3 className="Navbar__menu" onClick={handleClick} />
            )}
          </NavBarSwitch>
        </NavBarLinks>
      </NavBarSize>
    </NavBarContainer>
  );
};

export default Navbar;
