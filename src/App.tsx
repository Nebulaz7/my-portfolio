import { useState } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Aurora from "./Components/bits/Aurora";
import HeadContent from "./Components/headContent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Aurora
        colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
        blend={0.87}
        amplitude={1.0}
        speed={0.5}
      />
      <Navbar onThemeToggle={toggleTheme} />
      <HeadContent />
    </div>
  );
}

export default App;
