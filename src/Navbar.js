import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './Estate Project/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
    if (window.innerWidth > 700) {
      setIsOpen(false); // Close menu if window is resized back to desktop
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false); // Close menu when a link is clicked on mobile
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="main-containerr">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`right ${isOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={handleLinkClick}>Residencies</li>
          <li onClick={handleLinkClick}>Our Value</li>
          <li onClick={handleLinkClick}>Contact Us</li>
          <li onClick={handleLinkClick}>Get Started</li>
          <li><button className="contact-button">Contact</button></li>
        </ul>
      </div>
      {isMobile && (
        <div className={`toggle-button ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
