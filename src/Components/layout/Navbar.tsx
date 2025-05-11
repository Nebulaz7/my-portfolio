import { useState, useEffect } from "react";
import "./Navbar.css";
import lightThemeIcon from "../../assets/lightmode.svg";
import darkThemeIcon from "../../assets/darkmode.svg";
import logoImage from "../../assets/logo.svg";

interface NavbarProps {
  onThemeToggle: () => void;
}

export default function Navbar({ onThemeToggle }: NavbarProps) {
  const [activeItem, setActiveItem] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className="navbar-wrapper">
          <nav className="navbar-container">
            <div className="nav-items">
              <NavItem
                label="Projects"
                active={activeItem === "projects"}
                href="#projects"
                onClick={() => {
                  setActiveItem("projects");
                  // Scroll to the projects section when clicked
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              />
               <NavItem
                label="Technologies"
                active={activeItem === "Technologies"}
                href="#technologies"
                onClick={() => {
                  setActiveItem("technologies");
                  document.getElementById('technologies')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              />
              
              <NavItem
                label="About"
                active={activeItem === "about"}
                href="#about"
                onClick={() => {
                  setActiveItem("about");
                }}
              />
              <NavItem
                label="Contact"
                active={activeItem === "contact"}
                href="#contact"
                onClick={() => {
                  setActiveItem("contact");
                }}
              />
            </div>
            <button
              className="theme-button"
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                onThemeToggle();
              }}
            >
              <img
                src={isDarkMode ? darkThemeIcon : lightThemeIcon}
                alt={isDarkMode ? "Dark Mode Icon" : "Light Mode Icon"}
              />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

interface NavItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
  href: string;
}

function NavItem({ label, active, onClick, href }: NavItemProps) {
  return (
    <button onClick={onClick} className={`nav-item ${active ? "active" : ""}`}>
      {label}
    </button>
  );
}
