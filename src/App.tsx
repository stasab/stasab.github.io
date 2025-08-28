import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/Contact';
import PortfolioVLM from './pages/portfolio/PortfolioVLM';
import PortfolioAIAssistant from './pages/portfolio/PortfolioAIAssistant';
import PortfolioAccessibility from './pages/portfolio/PortfolioAccessibility';
import PortfolioStrategicShift from './pages/portfolio/PortfolioStrategicShift';
import PortfolioAIFormulating from './pages/portfolio/PortfolioAIFormulating';

const App: React.FC = () => {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolioAIAssistant" element={<PortfolioAIAssistant />} />
        <Route path="/portfolioVLM" element={<PortfolioVLM />} />
        <Route path="/portfolPortfolioAccessibilityioVLM" element={<PortfolioAccessibility />} />
        <Route path="/portfolioStrategicShift" element={<PortfolioStrategicShift />} />
        <Route path="/portfolioAIFormulating" element={<PortfolioAIFormulating />} />
      </Routes>
    </Router>
  );
};

export default App;
