/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Switch from "../Switch/Switch";
import { NavBarContainer } from "./Navbar.elements";

const Navbar = ({ theme, setTheme }) => {
  
  return (
    <NavBarContainer>
      <Switch theme={theme} setTheme={setTheme} />
    </NavBarContainer>
  );
};

export default Navbar;
