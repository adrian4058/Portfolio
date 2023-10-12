import styled from "styled-components";

export const NavBarContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  height: 80px;
  background-color: ${({ theme }) => theme.bgnavbar};
`;

// font-family: 'Roboto', sans-serif;
// font-family: 'Shadows Into Light', cursive;
