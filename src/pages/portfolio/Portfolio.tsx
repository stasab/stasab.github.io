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
        <ul>
          <li>
            <Link to="/portfolioAIAssistant">Nutrient | Project: AI Assistant</Link>
          </li>
          <li>
            <Link to="/portfolioVLM">Nutrient | Project: VLM Integration for OCR Improvements</Link>
          </li>
          <li>
            <Link to="/portfolPortfolioAccessibilityioVLM">Nutrient | Project: Accessibility & PDF/UA Compliance</Link>
          </li>
          <li>
            <Link to="/portfolioStrategicShift">Alchemy Cloud | Project: Strategic Shift in Product Architecture</Link>
          </li>
          <li>
            <Link to="/portfolioAIFormulating">Alchemy Cloud | Project: Project: AI-Powered Formulation</Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Portfolio;