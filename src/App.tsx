import { useState } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Aurora from "./Components/bits/Aurora";
import HeadContent from "./Components/headContent";
import ProjectSection from "./Components/ProjectSection";
import TechStack from "./Components/TechStack";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="headText">
        {/* // Aurora is a React component that creates a beautiful aurora effect in the background. 
        // It uses a canvas element to draw the aurora.*/}
        <Aurora
          colorStops={["#af40ff", "#5b42f3", "#00ddeb"]}
          blend={0.87}
          amplitude={1.0}
          speed={0.5}
        />
        <Navbar onThemeToggle={toggleTheme} />
        {/* // HeadContent is a React component that displays the main content of the page. 
        // It includes a title, subtitle, and a button to view projects. 
        // The button has an onClick event handler that scrolls the page to the projects section. */}
        <HeadContent />
        <TechStack />
        <div className="projects-section">
          <ProjectSection />
          {/* // ProjectSection is a React component that displays a list of projects.*/}
        </div>
      </div>
    </div>
  );
}

export default App;
