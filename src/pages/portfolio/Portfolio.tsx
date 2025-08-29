import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="container portfolio">
      <h2>Product Portfolio</h2>


      <div className="inner-container">
        <p>
          This is a selection of product work across different teams, industries, and types of challenges — from developer tools and AI-powered document processing to accessibility, workflow automation, and strategic platform redesigns.
          <br />
          Each project is linked below with a short case study.
        </p>
        <div className="projects">
          <Link className="project glass-box" to="/portfolioAIAssistant">Nutrient | AI Assistant</Link>
          <Link className="project glass-box" to="/portfolioStrategicShift">Alchemy Cloud | Strategic Shift in Product Architecture</Link>
          <Link className="project glass-box" to="/portfolioVLM">Nutrient | VLM Integration for OCR Improvements</Link>
          <Link className="project glass-box" to="/portfolioAIFormulating">Alchemy Cloud | AI-Powered Formulation</Link>
          <Link className="project glass-box" to="/portfolPortfolioAccessibilityioVLM">Nutrient | Accessibility & PDF/UA Compliance</Link>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;