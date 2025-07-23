import styled from "styled-components";

export const SwitchContainer = styled.div`
  transition: 0.2s all ease-out;
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
  transition: 0.2s all ease-out;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ButtonSwitch = styled.button`
  position: absolute;
  cursor: pointer;
  top: 1px;
  width: 23px;
  height: 23px;
  border: none;
  background: #fff;
  outline: none;
  border-radius: 50%;
  transition: 0.2s all ease-out;
  left: ${({ position }) => (position ? "21px" : "1px")};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
  }

  svg {
    transition: all 0.2s ease-out;
    color: ${({ position, theme }) => (position ? "#4A5568" : theme.primary)};
    font-size: 14px;
    width: 14px;
    height: 14px;
  }
  padding: 0;
`;
