import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantWebsite from './RestaurantWebsite.js';
import './index.css';  // Use the existing index.css instead of globals.css

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;