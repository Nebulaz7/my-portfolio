import { useState } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar onThemeToggle={toggleTheme} />
      <h1>Hello World this is my portfolio</h1>
    </div>
  );
}

export default App;
