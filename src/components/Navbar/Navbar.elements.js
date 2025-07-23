import styled from "styled-components";

export const NavBarContainer = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  height: 5rem;
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

export const NavBarLogos = styled.a`
  display: flex;
  cursor: pointer;
`;

export const LogoName = styled.img`
  width: 8.5rem;
  ${"" /* aspect-ratio: 1.3; */}
  object-fit: contain;
`;

export const NavBarLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const NavBarSwitch = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  .Navbar__menu {
    margin-left: 1rem;
    @media screen and (min-width: 720px) {
      display: none;
    }
    font-size: 2rem;
    fill: ${({ theme }) => theme.text} !important;
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
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.hover};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }

  @media screen and (max-width: 720px) {
    &.active::after {
      bottom: -4px;
    }
  }
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media screen and (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;
