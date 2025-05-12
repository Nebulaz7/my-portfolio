import { useEffect, useRef, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isLinksVisible, setIsLinksVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  
  const email = "jp0712002@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    });
  };

  // Generate subtle stars for the cosmos background
  useEffect(() => {
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      starsContainer.innerHTML = '';
      
      const numStars = 30; // Fewer stars for subtle effect
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star-subtle';
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        const size = `${0.1 + Math.random() * 0.15}rem`; // Smaller stars
        star.style.width = size;
        star.style.height = size;
        
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        starsRef.current.appendChild(star);
      }
    }
  }, []);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const contactRect = contactRef.current.getBoundingClientRect();
        const isContactVisible = contactRect.top < window.innerHeight * 0.8;
        
        if (isContactVisible) {
          setIsHeadingVisible(true);
          
          setTimeout(() => {
            setIsLinksVisible(true);
          }, 300);
        }
      }
      
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const isFooterInView = footerRect.top < window.innerHeight * 0.9;
        
        if (isFooterInView) {
          setIsFooterVisible(true);
        }
      }
    };
    
    // Check visibility on load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="footer-container" id="contact">
      {/* Contact Section */}
      <div className="contact-section" ref={contactRef}>
        <div className="subtle-cosmos"></div>
        <div className="stars-subtle" ref={starsRef}></div>
        
        <div className="contact-flex-container">
          <div className={`contact-heading ${isHeadingVisible ? 'visible' : ''}`}>
            <h2>Let's Connect</h2>
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly chat.
            </p>
            <div className="email-display" onClick={copyEmailToClipboard}>
              {email}
            </div>
          </div>
          
          <div className={`contact-links ${isLinksVisible ? 'visible' : ''}`}>
            {/* GitHub */}
            <a href="https://github.com/NebulaZ7" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </div>
              <span>GitHub</span>
            </a>
            
            {/* X (Twitter) */}
            <a href="https://x.com/joshpet77" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span>X</span>
            </a>
            
            {/* LinkedIn */}
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="footer" ref={footerRef}>
        <p className={`footer-text ${isFooterVisible ? 'visible' : ''}`}>
          © {new Date().getFullYear()} NebulaZ7. All rights reserved. Created with <span className="heart">❤</span> by Peters Joshua.
        </p>
      </div>
      
      {/* Tooltip for email copy */}
      {showTooltip && (
        <div className="email-tooltip">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Footer;
