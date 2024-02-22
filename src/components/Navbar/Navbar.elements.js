import styled from "styled-components";

export const NavBarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  height: 80px;
  background-color: ${({ theme }) => theme.bgnavbar};
  outline: 1px solid ${({ theme }) => theme.outline};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
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
`;

export const LogoName = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-family: "Shadows Into Light", cursive;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
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
`;

export const NavBarSwitch = styled.div`
  display: flex;
  align-items: center;

  .Navbar__menu {
    @media screen and (min-width: 720px) {
      display: none;
    }
    font-size: 2rem;
    fill: ${({ theme }) => theme.text};
    cursor: pointer;
    z-index: 3;
  }
`;

export const LinksButtons = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 1.5rem;
  list-style: none;
  transition: all 0.3s ease-out;

  @media screen and (max-width: 720px) {
    position: absolute;
    left: 0;
    margin: 0;
    height: 100vh;
    top: 0;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.bgnavbar};
    width: 100vw;
    top: -1000px;
    text-align: center;
  }

  &.active {
    transition: all 0.4s ease-out;
    top: 0;
    z-index: 2;
  }
`;

export const ListLinks = styled.li`
  padding: 1rem;
`;

export const LinksNav = styled.a`
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;
