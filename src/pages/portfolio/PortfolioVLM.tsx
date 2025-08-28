import React from 'react';
import img from '../../assets/W_N_cover_VLM.jpg';

const PortfolioVLM: React.FC = () => {
  return (
    <div className="container">
      <img src={img} alt="AI Project Cover" />

      <div className="inner-container">
        <h3>Nutrient | Project: VLM Integration for OCR Improvements</h3>
        <p>Nutrient is a leading provider of document processing SDKs and APIs, enabling developers and enterprises to manage complex document workflows with performance, scalability, and compliance with global standards such as PDF/UA and WCAG.
          <br />
          To push these capabilities further, we explored the use of Vision-Language Models (VLMs) to enhance OCR accuracy and layout understanding in complex, noisy, or low-quality documents. This project aimed to simplify the path to high-quality documents by combining cutting-edge AI with Nutrient’s proven expertise in document processing.</p>

        <h4>Problem</h4>
        <p>Traditional OCR (optical character recognition) engines often failed when documents contained non-standard layouts, tables, or degraded quality (noisy, complex, or low-quality documents). Errors at this stage cascaded into downstream processes, producing unreliable data and increasing the need for manual corrections. Customers needed higher accuracy and better structural understanding to unlock reliable automation.</p>

        <h4>My Role</h4>
        <p>I led the product discovery and research into the feasibility of using VLMs for document processing. This included evaluating open-source and commercial VLMs, defining evaluation benchmarks, and aligning internal stakeholders around opportunities for improved OCR accuracy and semantic understanding.</p>


        <h4>Actions & Solution</h4>
        <p>
          <ul>
            <li>Ran proof-of-concept experiments with SmolDocling and other emerging VLMs.</li>
            <li>Introduced multi-zonal document analysis via VLMs to segment and understand documents before OCR.</li>
            <li>Applied VLMs to classify documents upfront, enabling dynamic adjustment of OCR parameters for better results.</li>
            <li>Leveraged VLMs to separate noise from content, preventing common misinterpretations in noisy documents.</li>
            <li>Designed benchmark tests across degraded scans, tables, and mixed layouts, building dashboards to quantify performance gains.</li>
          </ul>
        </p>

        <h4>Impact</h4>
        <p>
          <ul>
            <li>Achieved ~30% improvement in OCR accuracy compared to baseline.</li>
            <li>Significantly reduced error rates on noisy, low-quality documents, cutting down on manual review and corrections.</li>
            <li>Reduced manual correction effort and unlocked higher reliability for downstream AI-powered workflows.</li>
            <li>Positioned Nutrient uniquely: unlike competitors who embed VLMs directly as OCR, we use VLMs before OCR as a pre-processing step. This approach leverages our already strong OCR algorithms while making them significantly more effective.</li>
          </ul>
        </p>

        <h4>Next Step</h4>
        <p>We are exploring the creation of a proprietary model optimized for document understanding, trained on large and diverse datasets available through Nutrient. Unlike generic VLMs, this model would be specialized for document layouts, structures, and edge cases common in enterprise workflows. The goal is to deliver a secure, high-accuracy solution that sets a new industry standard, giving Nutrient a proprietary advantage and our customers a smarter, more reliable way to process documents.</p>
      </div>
     
    </div>
  );
};

export default PortfolioVLM;