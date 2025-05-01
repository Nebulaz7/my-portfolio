import { useState } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Aurora from "./Components/bits/Aurora";

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
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a sample portfolio page.</p>
      </div>
    </div>
  );
}

export default App;
