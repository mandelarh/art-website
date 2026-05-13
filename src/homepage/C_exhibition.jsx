import React from 'react';
import './C_exhibition.css';
// 1. Import the image as a variable
import soloImage from './solo.jpg'; 

const C_exhibition = () => {
  return (
    <section className="exhibit-section">
      <div className="exhibit-content">
        
        {/* Left Side: Text Info */}
        <div className="exhibit-info">
          <h2 className="exhibit-header">CURRENT EXHIBITION ON VIEW</h2>
          <div className="exhibit-details">
            <h3 className="artist-name">Artist Name</h3>
            <p className="exhibit-dates">Dates for Exhib</p>
            <p className="exhibit-blurb">
              Blah Blah Blah info. 
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="exhibit-visual">
          <div className="img-container">
            {/* 2. Use the variable {soloImage} instead of a string "/solo.jpg" */}
            <img 
              src={soloImage} 
              alt="Current Exhibition" 
              className="main-exhibit-img" 
            />
            <div className="pink-accent-shape">
              <div className="placeholder-shape"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default C_exhibition;