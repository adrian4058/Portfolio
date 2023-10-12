import { useState } from "react";
import "./App.css";
import { Cover, Themes } from "./components";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Cover theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
