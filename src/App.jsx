import { useState, useEffect } from "react";
import "./App.css";
import { Cover, Themes } from "./components";
import { ThemeProvider } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false, // Cambiado a false para permitir re-animaciones
      mirror: false, // Evita que las animaciones se ejecuten al hacer scroll hacia arriba
    });
  }, []);

  // Efecto para refrescar AOS cuando cambia el tema
  useEffect(() => {
    // Esperamos un poco más para que el DOM se actualice completamente
    const timeoutId = setTimeout(() => {
      // Reinicializamos AOS completamente para evitar problemas
      AOS.refreshHard();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Cover theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
