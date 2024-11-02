import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantWebsite from './RestaurantWebsite';
import Menu from './Menu';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<RestaurantWebsite />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<h1>404 error</h1>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;