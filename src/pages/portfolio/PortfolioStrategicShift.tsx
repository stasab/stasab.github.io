import React from 'react';
import img from '../../assets/W_A_cover_shift.jpg';
import imgMockup from '../../assets/mockup2.png';

const PortfolioStrategicShift: React.FC = () => {
  return (
    <div className="container">
      <img src={img} alt="AI Project Cover" />

      <div className="inner-container">
        <h3>Alchemy Cloud | Project: Strategic Shift in Product Architecture</h3>
        <p>Alchemy Cloud is a B2B SaaS for workflow digitalization, helping companies in the speciality chemicals industry move from analog, lab-based processes to fully digital workflows. Covering the entire vertical, it supports every role and task across the industry, with the goal of accelerating innovation by capturing structured, AI-ready data throughout the product development lifecycle.</p>

        <h4>Problem</h4>
        <p>The original product was designed as a fully flexible system, assuming each company would digitalize unique workflows. In practice, this caused onboarding challenges, heavy support needs, and inconsistent data, making it difficult for customers to adopt and for the platform to deliver on its AI-driven vision.</p>

        <h4>My Role</h4>
        <p>
            <ul>
                <li>Led usability testing and discovery with customers to identify adoption challenges and pain points.</li>
                <li>Synthesized findings and aligned stakeholders on the need for a more opinionated product direction.</li>
                <li>Worked across engineering and design to define the new data and UX architecture.</li>
            </ul>
        </p>


        <h4>Actions & Solution</h4>
        <p>
          <ul>
            <li>Redesigned data models to enforce consistent, structured information.</li>
            <li>Simplified configuration layers to reduce complexity and technical debt.</li>
            <li>Restructured UX to provide out-of-the-box workflows that were still configurable within clear boundaries.</li>
            <li>Drove adoption strategy ensuring faster onboarding and smoother customer experience.</li>
          </ul>
        </p>

        <h4>Impact</h4>
        <p>
          <ul>
           <li>Reduced onboarding time and support load.</li>
           <li>Delivered consistent, AI-ready data that enabled advanced analytics.</li>
           <li>Improved customer adoption and long-term retention.</li>
           <li>Established a foundation for Alchemy Cloud’s AI strategy and product scalability.</li>
          </ul>
        </p>

        <img src={imgMockup} />

      </div>
     
    </div>
  );
};

export default PortfolioStrategicShift;