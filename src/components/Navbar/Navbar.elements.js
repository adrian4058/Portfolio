import styled from "styled-components";

export const NavBarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  height: 80px;
  background-color: ${({ theme }) => theme.bgnavbar};
`;

export const NavBarSize = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  max-width: 1000px;
`;

export const NavBarLogos = styled.div`
  display: flex;
  ${"" /* flex-direction: column; */}
`;

export const LogoName = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-family: "Shadows Into Light", cursive;
`;

export const PuntoDetail = styled.h1`
    margin: 0
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.hover}
`;

export const NavBarLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 150px;
`;

export const NavBarSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Navbar__menu {
    font-size: 1.5rem;
    fill: ${({ theme }) => theme.text};
  }
`;
