import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantWebsite from './RestaurantWebsite';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantWebsite />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;