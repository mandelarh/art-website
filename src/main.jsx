import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import your page setups
import Homepage from './homepage/homepage.jsx'
import MissionStatement from './homepage/MissionStatement.jsx' // Double-check file path matches your project
import ComingSoon from './homepage/ComingSoon.jsx'             // Double-check file path matches your project
import ArtistSubmissions from './homepage/ArtistSubmissions.jsx' // Double-check file path matches your project

import './index.css' // Your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Path "/" means the standard landing page. It keeps your scrolling Homepage stacked exactly as it is now. */}
        <Route path="/" element={<Homepage />} />
        
        {/* These define your new standalone pages */}
        <Route path="/mission" element={<MissionStatement isStandalone={true} />} />
        <Route path="/exhibition" element={<ComingSoon isStandalone={true} />} />
        <Route path="/apply" element={<ArtistSubmissions isStandalone={true} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)