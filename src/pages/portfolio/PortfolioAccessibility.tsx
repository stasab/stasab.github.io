import React from 'react';

const PortfolioAccessibility: React.FC = () => {
  return (
    <div className="container">
      <img src="/assets/W_N_cover_PDFUA.jpg" alt="AI Project Cover" />

      <div className="inner-container">
        <h3>Nutrient | Accessibility & PDF/UA Compliance</h3>
        <p>Nutrient is a leading provider of document processing SDKs and APIs, enabling developers and enterprises to manage complex document workflows with performance, scalability, and compliance with global standards such as PDF/UA and WCAG.
          <br />
          Building on this foundation, we invested in accessibility features to help customers meet compliance requirements while ensuring documents are usable by all people, including those relying on assistive technologies. This initiative positioned Nutrient as a partner in not only performance and accuracy, but also inclusivity and compliance.
        </p>

        <h4>Problem</h4>
        <p>Enterprises increasingly face legal and market pressure to make digital documents accessible (PDF/UA, WCAG 2.2). Existing tools often produced incomplete or inconsistent tagging, making documents hard to navigate with screen readers and exposing organizations to compliance risks. Customers needed a reliable way to generate accessible PDFs at scale.</p>

        <h4>My Role</h4>
        <ul>
          <li>Led discovery with customers across industries (finance, public sector, education) to identify accessibility pain points and compliance requirements.</li>
          <li>Translated regulatory standards (PDF/UA, WCAG) into concrete product requirements.</li>
          <li>Worked with engineering to design features for auto-tagging, logical tab order, alt text, etc.</li>
          <li>Collaborated with design to ensure accessibility support extended beyond documents into SDK UI.</li>
        </ul>


        <h4>Actions & Solution</h4>
        <ul>
          <li>Developed SDK features that auto-tag and structure PDFs to meet PDF/UA standards, ensuring full screen reader compatibility.</li>
          <li>Implemented logic to preserve existing tags during processing operations (e.g., splitting, merging, redaction), so documents remain compliant after transformations.</li>
          <li>Integrated logical tab order, keyboard navigation, and focus visibility for interactive elements.</li>
          <li>Added support for alt text on images, form fields, annotations, and multimedia.</li>
          <li>Built validation tools to check PDF/UA compliance before distribution.</li>
        </ul>

        <h4>Impact</h4>
        <ul>
          <li>Enabled customers to meet PDF/UA and WCAG compliance at scale, helping them align with key accessibility regulations such as the European Accessibility Act (EEA) and the Americans with Disabilities Act (ADA). This reduced legal and financial risks, and saved significant potential costs by avoiding compliance fines.</li>
          <li>Improved accessibility for end users, making documents easier to read, navigate, and interact with.</li>
          <li>Increased customer trust, particularly in public sector and enterprise clients where compliance is mandatory.</li>
        </ul>

        <h4>Next Step</h4>
        <p>Exploring how to apply AI-powered accessibility by leveraging Vision-Language Models (VLMs) to automatically generate meaningful and context-aware alternative text for non-text elements in PDFs. The goal is to go beyond generic descriptions and provide accurate, useful alt text that enhances accessibility for screen reader users. This approach could dramatically reduce the manual effort required to tag images, charts, and graphics, while ensuring consistency and compliance with PDF/UA and WCAG standards.</p>

        <h4>Knowledge Sharing & Enablement</h4>
        <ul>
          <li>Delivered company-wide training on accessibility, breaking down complex PDF/UA and WCAG requirements into clear, digestible concepts.</li>
          <li>Created internal documentation and reference guides, ensuring accessibility knowledge was embedded across all teams, particularly GTM. </li>
          <li>Led presentations and workshops that helped cross-functional teams confidently apply accessibility principles in daily work.</li>
          <li>Established an internal knowledge base that continues to support onboarding and long-term alignment on accessibility goals.</li>
        </ul>
      </div>

    </div>
  );
};

export default PortfolioAccessibility;