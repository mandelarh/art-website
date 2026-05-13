import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './homepage/homepage.jsx'
import './index.css' // Global styles like margin: 0

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
)