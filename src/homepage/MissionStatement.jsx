import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './MissionStatement.css';

const MissionStatement = () => {
  return (
    <section className="mission-section">
      <h1 className="mission-title">OUR MISSION</h1>
      
      <div className="mission-text">
        <p>
          BAM Gallery is an online platform dedicated to exhibiting the 
          work of emerging artists from around the world.
        </p>
        <p>
          We curate and showcase cohesive bodies of work that explore 
          diverse identities, cultures, and communities.
        </p>
      </div>

      <div className="social-links">
        {/* Email */}
        <a href="mailto:thebamgallery@gmail.com" className="social-item">
          <FaEnvelope className="icon" />
          <span>thebamgallery@gmail.com</span>
        </a>

        <span className="divider">|</span>

        {/* Instagram */}
        <a href="https://instagram.com/blahblahblah" target="_blank" rel="noreferrer" className="social-item">
          <FaInstagram className="icon" />
          <span>@blahblahblah</span>
        </a>

        <span className="divider">|</span>

        {/* YouTube */}
        <a href="https://youtube.com/@yourchannel" target="_blank" rel="noreferrer" className="social-item">
          <FaYoutube className="icon" />
          <span>YouTube</span>
        </a>
      </div>
    </section>
  );
};

export default MissionStatement;