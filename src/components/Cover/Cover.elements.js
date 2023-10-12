import styled from "styled-components";

export const CoverContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.bgc};
  ${"" /* transition: 0.5s all ease-out; */}
`;

export const CoverWrapper = styled.section`
  width: 85vw;
  height: 100vh;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.bgc};
`;

export const InfoContainer = styled.div`
  width: 100%;
  ${'' /* margin: auto; */}
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  svg {
    font-size: 6rem;
    fill: ${({ theme }) => theme.text};
  }
  h1 {
    text-align: center;
    width: 100%;
    font-family: "Roboto";
    color: ${({ theme }) => theme.text};
    &:nth-of-type(1) {
      font-weight: 300;
      font-size: 1.5rem;
    }
    &:nth-of-type(2) {
      font-weight: 700;
      font-size: 4rem;
    }
  }
`;

export const CustomButtom = styled.button`
  ${'' /* margin-top: 100px; */}
  color: #eee;
  background-color: ${({ theme }) => theme.text};
  font-family: "Roboto";
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
    transition: 0.4s ease-in;
  }
`;
