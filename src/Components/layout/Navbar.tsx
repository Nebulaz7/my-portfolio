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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu if screen is resized to desktop
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = windowWidth <= 768;

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className="navbar-wrapper">
          <nav className={`navbar-container ${isMenuOpen ? "menu-open" : ""}`}>
            {isMobile && (
              <button className="hamburger-menu" onClick={toggleMenu}>
                <span
                  className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
                ></span>
              </button>
            )}
            <div className={`nav-items ${isMenuOpen ? "show" : ""}`}>
              <NavItem
                label="Projects"
                active={activeItem === "projects"}
                onClick={() => {
                  setActiveItem("projects");
                  if (isMobile) setIsMenuOpen(false);
                }}
              />
              <NavItem
                label="About"
                active={activeItem === "about"}
                onClick={() => {
                  setActiveItem("about");
                  if (isMobile) setIsMenuOpen(false);
                }}
              />
              <NavItem
                label="Blog"
                active={activeItem === "blog"}
                onClick={() => {
                  setActiveItem("blog");
                  if (isMobile) setIsMenuOpen(false);
                }}
              />
              <NavItem
                label="Contact"
                active={activeItem === "contact"}
                onClick={() => {
                  setActiveItem("contact");
                  if (isMobile) setIsMenuOpen(false);
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
}

function NavItem({ label, active, onClick }: NavItemProps) {
  return (
    <button onClick={onClick} className={`nav-item ${active ? "active" : ""}`}>
      {label}
    </button>
  );
}
