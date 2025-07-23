import { useState, useEffect } from "react";
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
    // Agregar clase al body para indicar cambio de tema
    document.body.classList.add('theme-changing');
    
    if (theme === "light") {
      changePosition();
      setTheme("dark");
    } else {
      changePosition();
      setTheme("light");
    }
    
    // Remover la clase después de que termine la transición
    setTimeout(() => {
      document.body.classList.remove('theme-changing');
    }, 400); // Un poco más que la duración de la transición (300ms)
  };
  
  const changePosition = () => {
    setPosition(!position);
  };
  
  // Inicializar la posición del switch basado en el tema actual
  useEffect(() => {
    setPosition(theme === "dark");
  }, [theme]);
  
  let icono = theme === "light" ? <BsSun /> : <BsMoon />;

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
