import React from 'react';
import { Link } from 'react-router-dom'; // Import Link tool
import './ComingSoon.css';
import curatorImage from './pootieBW.jpg'; 

const ComingSoon = ({ isStandalone }) => {
  return (
    <div id="exhibit-section" className="coming-soon-container">
      {/* Absolute floating back button so it overlays cleanly on top of the black background */}
      {isStandalone && (
        <Link to="/" style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          color: '#ffc0cb', 
          textDecoration: 'underline',
          zIndex: 10
        }}>
          ← Back to Gallery Home
        </Link>
      )}

      <div className="text-content">
        <h1 className="coming-soon-title">
          INCOMING EXHIBITION :<br/>INSERT NAME
        </h1>
        <p className="coming-soon-subtitle">
          Coming soon...
        </p>
      </div>
      <div className="image-frame">
        <img src={curatorImage} alt="Artist/Curator" />
      </div>
    </div>
  );
};

export default ComingSoon;