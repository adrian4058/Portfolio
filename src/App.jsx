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
      once: false,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
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
