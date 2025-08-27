import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/Contact';
import PortfolioVLM from './pages/portfolio/PortfolioVLM';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function RedirectFixer() {
  const location = useLocation();

  useEffect(() => {
    if (location.search && location.pathname === "/") {
      const realPath = location.search.slice(1);
      window.history.replaceState(null, "", realPath);
    }
  }, [location]);

  return null;
}

const App: React.FC = () => {

  return (
    <Router>
      <RedirectFixer />
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
