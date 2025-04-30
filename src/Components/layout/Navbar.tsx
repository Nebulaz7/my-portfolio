import { useState } from "react";
import "./Navbar.css";
import lightThemeIcon from "../../assets/lightmode.svg";
import darkThemeIcon from "../../assets/darkmode.svg";
import logoImage from "../../assets/logo.svg";

interface NavbarProps {
  onThemeToggle: () => void;
}

export default function Navbar({ onThemeToggle }: NavbarProps) {
  const [activeItem, setActiveItem] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logoImage} />
        </div>
        <div className="navbar-wrapper">
          <nav className="navbar-container">
            <div className="nav-items">
              <NavItem
                label="Projects"
                active={activeItem === "projects"}
                onClick={() => setActiveItem("projects")}
              />
              <NavItem
                label="About"
                active={activeItem === "about"}
                onClick={() => setActiveItem("about")}
              />
              <NavItem
                label="Blog"
                active={activeItem === "blog"}
                onClick={() => setActiveItem("blog")}
              />
              <NavItem
                label="Contact"
                active={activeItem === "contact"}
                onClick={() => setActiveItem("contact")}
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
}

function NavItem({ label, active, onClick }: NavItemProps) {
  return (
    <button onClick={onClick} className={`nav-item ${active ? "active" : ""}`}>
      {label}
    </button>
  );
}
