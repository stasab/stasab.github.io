import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/Contact';
import PortfolioVLM from './pages/portfolio/PortfolioVLM';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolioVLM" element={<PortfolioVLM />} />
      </Routes>
    </Router>
  );
};

export default App;
