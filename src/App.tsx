import { useState } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import HeadContent from "./Components/headContent";
import ProjectSection from "./Components/ProjectSection";
import TechStack from "./Components/TechStack";
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="headText">
        <Navbar onThemeToggle={toggleTheme} />
        <HeadContent />
        <ProjectSection />
        <TechStack />
        <AboutSection />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
