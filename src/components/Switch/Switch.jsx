import { useState, useEffect } from "react";
import { SwitchContainer, SwitchWrapper, SwitchBGC, ButtonSwitch } from "./Switch.elements";
import { IoSunny, IoMoon } from "react-icons/io5";

const Switch = ({ theme, setTheme }) => {
  const [position, setPosition] = useState(false);

  const changeTheme = () => {
    document.body.classList.add("theme-changing");

    if (theme === "light") {
      changePosition();
      setTheme("dark");
    } else {
      changePosition();
      setTheme("light");
    }

    setTimeout(() => {
      document.body.classList.remove("theme-changing");
    }, 200);
  };

  const changePosition = () => {
    setPosition(!position);
  };

  useEffect(() => {
    setPosition(theme === "dark");
  }, [theme]);

  let icono = theme === "light" ? <IoSunny /> : <IoMoon />;

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
