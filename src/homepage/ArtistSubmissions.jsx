import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './ArtistSubmissions.css';

// Initialize Supabase Client
const supabaseUrl = 'https://hcstwciorhwdczrovypz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc3R3Y2lvcmh3ZGN6cm92eXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2OTM0NjYsImV4cCI6MjA5NDI2OTQ2Nn0.G4OYeZPvjaJYDiOToS4zWpuOW6jQh_5KMrDMP3FoYYo';
const supabase = createClient(supabaseUrl, supabaseKey);

const ArtistSubmissions = () => {
  // 1. State for text inputs
  const [formData, setFormData] = useState({
    full_name: '',
    artist_name: '',
    city: '',
    state: '',
    country: '',
    phone: '',
    email: '',
    statement: ''
  });

  // 2. State for the PDF file
  const [file, setFile] = useState(null);

  // Handle text changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // 3. The Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Starting submission process...");

    let publicUrl = '';

    try {
      // Step A: Upload File to Storage if it exists
      if (file) {
        const fileName = `${Date.now()}_${file.name}`;
        const { data: storageData, error: storageError } = await supabase
          .storage
          .from('portfolios') // Make sure this bucket exists in Supabase!
          .upload(fileName, file);

        if (storageError) throw storageError;

        // Get the Public URL
        const { data: urlData } = supabase
          .storage
          .from('portfolios')
          .getPublicUrl(fileName);
        
        publicUrl = urlData.publicUrl;
      }

      // Step B: Insert everything into the Table
      const { error: tableError } = await supabase
        .from('submissions')
        .insert([{ 
          ...formData, 
          portfolio_url: publicUrl 
        }]);

      if (tableError) throw tableError;

      alert('Submission successful!');
      // Optional: Clear form here
    } catch (error) {
      console.error("Submission Error:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <section className="submission-section">
      <div className="title-box">
        <h1 className="submission-title">ARTIST SUBMISSIONS</h1>
      </div>

      <form className="submission-form" onSubmit={handleSubmit}>
        {/* Left Column: Pill Inputs */}
        <div className="form-left">
          {[
            { label: 'Full name', name: 'full_name' },
            { label: 'Artist Name', name: 'artist_name' },
            { label: 'City', name: 'city' },
            { label: 'State', name: 'state' },
            { label: 'Country', name: 'country' },
            { label: 'Phone', name: 'phone' },
            { label: 'Email', name: 'email' }
          ].map((item) => (
            <div className="input-group" key={item.name}>
              <label>{item.label}</label>
              <input 
                type={item.name === 'email' ? 'email' : 'text'} 
                name={item.name}
                onChange={handleChange}
                required
                className="pill-input" 
              />
            </div>
          ))}
        </div>

        {/* Right Column: Statement and File */}
        <div className="form-right">
          <div className="statement-section">
            <label>Personal Statement (up to 300 words)</label>
            <textarea 
              name="statement" 
              onChange={handleChange}
              className="statement-box"
              required
            ></textarea>
          </div>
          
          <div className="file-section">
            <label className="file-label">Portfolio [file insert]</label>
            <input 
              type="file" 
              accept=".pdf" 
              onChange={handleFileChange}
              className="file-input" 
            />
          </div>
          
          <button type="submit" className="submit-btn">SUBMIT APPLICATION</button>
        </div>
      </form>
      
    </section>
  );
};

export default ArtistSubmissions;