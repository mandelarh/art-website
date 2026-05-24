import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Crucial import for page jumping
import './name.css'; 

const Name = () => {
  // Keeps track of whether the fullscreen mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FIXED: Toggles the state using the correct setter function name
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="hero-container">
      
      {/* Tapping this nav icon triggers the state to open the menu */}
      <nav className="nav-overlay" onClick={toggleMenu}>
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {/* The Fullscreen Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="full-screen-menu">
          <button className="close-btn" onClick={toggleMenu}>X</button>
          
          <ul className="menu-links">
            {/* These links switch URLs to your separate pages and close the menu overlay simultaneously */}
            <li><Link to="/mission" onClick={toggleMenu}>Our Mission</Link></li>
            <li><Link to="/exhibition" onClick={toggleMenu}>Current Exhibition</Link></li>
            
            <li><Link to="/previous-exhibitions" onClick={toggleMenu}>Previous Exhibitions</Link></li>
            <li><Link to="/digital-gallery" onClick={toggleMenu}>Digital Gallery</Link></li>
            
            
            <li><Link to="/apply" onClick={toggleMenu}>Apply Now</Link></li>
          </ul>
        </div>
      )}

      <h1 className="main-title">"FIREWALL"</h1>
    </section>
  );
};

export default Name;