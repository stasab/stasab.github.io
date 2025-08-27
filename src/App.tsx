import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/Contact';
import PortfolioVLM from './pages/portfolio/PortfolioVLM';
import { useLocation } from 'react-router-dom';


// Add this hook near the top of your App component
function useQueryRedirectFix() {
  const location = useLocation();

  // If app is loaded with query param instead of proper path (after redirect from 404.html)
  if (location.search && location.pathname === "/") {
    const realPath = location.search.slice(1);
    window.history.replaceState(null, "", realPath);
  }
}

const App: React.FC = () => {
  useQueryRedirectFix();

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
