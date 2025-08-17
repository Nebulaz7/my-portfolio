import { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import nebulaImage from "../assets/nebula-img.png";

const AboutSection: React.FC = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  // Generate random stars for the cosmos background
  useEffect(() => {
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      starsContainer.innerHTML = "";

      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";

        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random size
        const size = `${0.1 + Math.random() * 0.3}rem`;
        star.style.width = size;
        star.style.height = size;

        // Random animation delay
        star.style.animationDelay = `${Math.random() * 4}s`;

        starsContainer.appendChild(star);
      }
    }
  }, []);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;

        if (isVisible) {
          setIsImageVisible(true);

          // Delay the content animation and typewriter effect
          setTimeout(() => {
            setIsContentVisible(true);
            setTimeout(() => {
              setIsTyping(true);
            }, 500);
          }, 500);
        }
      }
    };

    // Check visibility on initial load
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef} id="about">
      <div className="about-cosmos-bg"></div>
      <div className="stars" ref={starsRef}></div>

      <div className="about-container">
        <div
          className={`about-image-container ${isImageVisible ? "visible" : ""}`}
        >
          <img src={nebulaImage} alt="Profile" className="about-image" />
        </div>

        <div className={`about-content ${isContentVisible ? "visible" : ""}`}>
          <h2 className="about-title">About Me</h2>

          <div className="about-description">
            <h3 className={`typewriter-text ${isTyping ? "typing" : ""}`}>
              Web Developer
            </h3>

            <p>
              Hello, I'm Peters Joshua (NebulaZ7), my love for Web Development
              started around 2021, when I discovered that I could create a
              website with just a few lines of code using HTML, since then I've
              been on a journey to learn more about the world of web development
              and other emerging technologies.
              {/* I'm a passionate developer with expertise in building modern web applications.
              My journey in tech began with a curiosity about how things work, which evolved into
              a career creating elegant solutions to complex problems. */}
            </p>

            <p>
              I'm also a student of Computer Science at tshe Federal University
              of Agriculture, Abeokuta. I'm a passionate developer with
              expertise in building modern web applications, With a focus on
              React, TypeScript and css. I strive to create user-friendly
              experiences that are both functional and aesthetically pleasing. I
              believe in writing clean, maintainable code and staying current
              with emerging technologies.
            </p>
          </div>

          {/* <div className="about-skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Express</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
