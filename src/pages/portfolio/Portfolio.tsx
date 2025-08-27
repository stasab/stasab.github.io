import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="container">
      <h2>Product Portfolio</h2>
      <p>The best projects I have worked on.</p>
      <ul>
        <li>
          <Link to="/nutrient_VLM">Nutrient | Project: VLM Integration for OCR Improvements</Link>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;