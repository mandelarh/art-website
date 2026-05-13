import React, { useState } from 'react'; // Import the 'switch' (useState)
import './name.css'; 

const Name = () => {
  // 1. Create the 'switch'. By default, it's closed (false).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Create a function to flip the switch
  const toggleMenu = () => {
    setIsOpen(!isMenuOpen);
  };

  return (
    <section className="hero-container">
      
      {/* 3. Add an onClick to the icon so it triggers the switch */}
      <nav className="nav-overlay" onClick={toggleMenu}>
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {/* 4. The Conditional Menu: Only shows if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="full-screen-menu">
          <button className="close-btn" onClick={toggleMenu}>X</button>
          <ul className="menu-links">
            <li><a href="/">Home</a></li>
            <li><a href="/exhibition">Exhibition</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
      )}

      <h1 className="main-title">"NAME"</h1>
    </section>
  );
};

export default Name;