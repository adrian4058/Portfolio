import styled from "styled-components";

export const ImgIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0.25rem;
  box-sizing: border-box;

  img,
  svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;
  }

  @media screen and (min-width: 1050px) {
    width: 18vh;
    height: 18vh;
    padding: 0.5rem;
  }
  @media screen and (min-width: 720px) {
    width: 12.5vh;
    height: 12.5vh;
    padding: 0.375rem;
  }
  @media screen and (min-width: 540px) {
    width: 11vh;
    height: 11vh;
    padding: 0.375rem;
  }
`;
