import styled from "styled-components";

export const SwitchContainer = styled.div`
  transition: 0.5s all ease-in;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 80px;
`;

export const SwitchBGC = styled.div`
  position: relative;
  width: 45px;
  height: 25px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.toggle};
  transition: 1s all ease-in;
`;

export const ButtonSwitch = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 4.5px;
  width: 45px;
  height: 15px;
  border: none;
  background: none;
  outline: none;
  transition: 0.4s all ease-in;
  left: ${({ position }) => (position ? "5px" : "-5px")};

  svg {
    position: relative;
    transition: transform 0.4s all ease-in;
    left: ${({ position }) => (position ? "5px" : "-5px")};
    fill: #fff;
  }
  padding: 0;
`;
