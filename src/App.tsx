import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/Contact';
import Portfolio_VLM from './pages/portfolio/Portfolio_VLM';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nutrient_VLM" element={<Portfolio_VLM />} />
      </Routes>
    </Router>
  );
};

export default App;
