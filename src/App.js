import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantWebsite from './components/RestaurantWebsite';

// Import required styles for shadcn/ui
import "@/styles/globals.css"

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