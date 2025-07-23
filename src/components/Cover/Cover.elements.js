import styled, { keyframes } from "styled-components";

export const CoverContainer = styled.section`
  width: 100vw;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.bgc};
  background-image: ${({ theme }) => theme.bgcimage};
`;

export const CoverWrapper = styled.section`
  width: 85vw;
  min-height: 100vh;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  gap: 2rem;

  h1 {
    text-align: center;
    width: 100%;
    font-family: "Roboto";
    color: ${({ theme }) => theme.text};
  }
  h2 {
    font-weight: 200;
    text-align: center;
    color: ${({ theme }) => theme.text};
  }
  p {
    color: ${({ theme }) => theme.text};
  }
  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Docs = styled.div`
  display: flex;
  padding-top: 2rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  svg {
    padding: 0 5px;
  }
`;

export const CV = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  border-width: 2px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  .sheetPlastic {
    width: 1.25rem;
  }
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Portfolio = styled.a`
  display: flex;
  cursor: pointer;
  background: ${({ theme }) => theme.primary};
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  border-width: 2px;
  padding: 0.5rem 1rem;
  color: #eee;
  border: 1px solid ${({ theme }) => theme.primary};
  .animatedArrow {
    animation: ${arrowAnimation} 1s ease-out infinite;
  }
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(to right, #00b5e8, #0085ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    font-weight: 400;
  }
  @media screen and (min-width: 720px) {
    align-items: start;
    h1 {
      text-align: start;
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media screen and (min-width: 1050px) {
    h1 {
      text-align: start;
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const borderAnimation = keyframes`
  0% {
    border-radius: 50%;
  }
  50% {
    border-radius: 30% 70% 20% 40%/70% 30% 40%;
  }
  100% {
    border-radius: 50%;
  }
`;

export const ProfilePicture = styled.img`
  width: 20rem;
  height: 21rem;

  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  object-fit: cover;
  animation: ${borderAnimation} 6s infinite alternate ease-in-out;

  @media screen and (max-width: 720px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 1050px) {
    width: 15rem;
    height: 16rem;
  }
`;
