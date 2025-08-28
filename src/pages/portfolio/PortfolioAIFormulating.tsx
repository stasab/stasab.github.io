import React from 'react';
import img from '../../assets/W_A_cover_ai.jpg';
import imgMockup from '../../assets/mockup3.png';
import imgMockup2 from '../../assets/mockup4.png';

const PortfolioAIFormulating: React.FC = () => {
  return (
    <div className="container">
      <img src={img} alt="AI Project Cover" />

      <div className="inner-container">
        <h3>Alchemy Cloud | Project: AI-Powered Formulation</h3>
        <p>Alchemy Cloud is a B2B SaaS for workflow digitalization, helping companies in the speciality chemicals industry move from analog, lab-based processes to fully digital workflows. Covering the entire vertical, it supports every role and task across the industry, with the goal of accelerating innovation by capturing structured, AI-ready data throughout the product development lifecycle.</p>

        <h4>Problem</h4>
        <p>Traditional formulation development relied on manual, expert-driven methods, which were slow, inconsistent, and limited in exploring the full range of possible combinations. Customers needed a faster, more reliable way to identify optimal formulations while reducing trial-and-error in the lab.</p>

        <h4>My Role</h4>
        <p>I partnered with data scientists and domain experts to define requirements, validate outputs, and ensure the workflow balanced automation with usability. I focused on making advanced capabilities accessible without overwhelming users, while still offering flexibility for more technical teams.</p>


        <h4>Actions & Solution</h4>
        <p>
          <ul>
            <li>Designed an AI-driven “auto loop” for formulation design, integrating Design of Experiments (DOE) with machine learning models.</li>
            <li>Automated the process of training models on available data to recommend optimal formulations based on target criteria and rules.</li>
            <li>Built a layered UX: everyday users received instant, high-value recommendations, while advanced users could access detailed tuning options and experiment design.</li>
            <li>Incorporated fallback logic: when insufficient data was available, the system guided users through the minimum number of DOE experiments to expand the dataset.</li>
          </ul>
        </p>

        <h4>Impact</h4>
        <p>
          <ul>
            <li>Delivered formulations with proven performance beyond what lab technicians could achieve manually.</li>
            <li>Dramatically reduced time and effort required for formulation development.</li>
            <li>Balanced accessibility and power, ensuring both non-technical and advanced users could succeed.</li>
            <li>Positioned Alchemy Cloud as a leader in AI-powered formulation within the speciality chemicals industry.</li>
          </ul>
        </p>

        <img src={imgMockup} />
        <img src={imgMockup2} />
      </div>
     
    </div>
  );
};

export default PortfolioAIFormulating;