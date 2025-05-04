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
      <div className="headText">
        <Aurora
          colorStops={["#af40ff", "#5b42f3", "#00ddeb"]}
          //  #af40ff, #5b42f3 50%, #00ddeb
          blend={0.87}
          amplitude={1.0}
          speed={0.5}
        />
        <Navbar onThemeToggle={toggleTheme} />
        <HeadContent />
      </div>
    </div>
  );
}

export default App;
