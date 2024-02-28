import styled from "styled-components";

export const ImgIcon = styled.img`
  max-width: 3rem;
  height: 3rem;
  object-fit: contain;

  @media screen and (min-width: 1050px) {
    max-width: 18vh;
    height: 18vh;
  }
  @media screen and (min-width: 720px) {
    max-width: 12.5vh;
    height: 12.5vh;
  }
  @media screen and (min-width: 540px) {
    max-width: 11vh;
    height: 11vh;
  }
`;
