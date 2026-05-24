import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryPlaceholder.css';

const GalleryPlaceholder = ({ pageTitle, isStandalone }) => {
  return (
    <div className="placeholder-container">
      {/* Reusing your standalone prop layout logic */}
      {isStandalone && (
        <Link to="/" className="placeholder-back-btn">
          ← Back to Gallery Home
        </Link>
      )}

      <div className="placeholder-text-content">
        <h1 className="placeholder-main-title">
          {pageTitle.toUpperCase()}
        </h1>
        <p className="placeholder-subtitle">
          Coming soon...
        </p>
      </div>
    </div>
  );
};

export default GalleryPlaceholder;