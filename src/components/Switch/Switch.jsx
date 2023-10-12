import { useState } from "react";
import {
  SwitchContainer,
  SwitchWrapper,
  SwitchBGC,
  ButtonSwitch,
} from "./Switch.elements";
import { BsSun, BsMoon } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Switch = ({ theme, setTheme }) => {
  const [position, setPosition] = useState(false);
  const changeTheme = () => {
    if (theme === "light") {
      changePosition();
      setTheme("dark");
    } else {
      changePosition();
      setTheme("light");
    }
  };
  const changePosition = () => {
    setPosition(!position);
  };
  let icono = theme === "light" ? <BsSun /> : <BsMoon />;
  console.log(icono);

  return (
    <>
      <SwitchContainer>
        <SwitchWrapper>
          <SwitchBGC>
            <ButtonSwitch onClick={() => changeTheme()} position={position}>
              {icono}
            </ButtonSwitch>
          </SwitchBGC>
        </SwitchWrapper>
      </SwitchContainer>
    </>
  );
};

export default Switch;
