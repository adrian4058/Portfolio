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
  LinksButtons,
  ListLinks,
  LinksNav,
} from "./Navbar.elements";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import logoblanco from "../../assets/logoblanco.png";
import logonegro from "../../assets/logo.png";

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

  let logo = theme === "light" ? logonegro : logoblanco;

  return (
    <NavBarContainer>
      <NavBarSize>
        <NavBarLogos href="#home">
          <LogoName src={logo} />
          
        </NavBarLogos>
        <NavBarLinks>
          <LinksButtons className={`${clicked ? "active" : ""}`}>
            {Links.map((link, index) => (
              <ListLinks key={index}>
                <LinksNav onClick={handleClick} href={link.link}>
                  {link.name}
                </LinksNav>
              </ListLinks>
            ))}
          </LinksButtons>
          <NavBarSwitch>
            <Switch theme={theme} setTheme={setTheme} />
            {clicked ? (
              <MdClose className="Navbar__menu" onClick={handleClick} />
            ) : (
              <IoMdMenu className="Navbar__menu" onClick={handleClick} />
            )}
          </NavBarSwitch>
        </NavBarLinks>
      </NavBarSize>
    </NavBarContainer>
  );
};

export default Navbar;
