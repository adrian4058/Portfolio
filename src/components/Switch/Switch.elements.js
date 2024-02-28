import styled from "styled-components";

export const SwitchContainer = styled.div`
  width: 70px;
  ${'' /* margin: 0 0.5rem; */}
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
  left: ${({ position }) => (position ? "10px" : "-12px")};
  width: 50px;
  height: 15px;
  border: none;
  background: none;
  outline: none;
  transition: 0.4s all ease-in;
  svg {
    fill: #fff;
  }
  padding: 0;
`;
