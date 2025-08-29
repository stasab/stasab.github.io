import React from 'react';

const PortfolioAIAssistant: React.FC = () => {
  return (
    <div className="container">
      <img src="/assets/W_N_cover_AI.jpg" alt="AI Project Cover" />

      <div className="inner-container">
        <h3>Nutrient | AI Assistant</h3>
        <p>Nutrient is a leading provider of document processing SDKs and APIs, enabling developers and enterprises to manage complex document workflows with performance, scalability, and compliance with global standards such as PDF/UA and WCAG.
           <br></br>
           Building on this foundation, the AI Assistant project introduced natural language interaction with documents, allowing users to chat, search, compare, and edit large or multiple files. This initiative positioned Nutrient at the forefront of a new standard in usability, making document handling more intuitive and accessible for all users</p>

        <h4>Problem</h4>
        <p>End users struggled to understand, navigate, and extract information from long, complex, or grouped documents. At the same time, ‘chat with your documents’ was becoming an expected capability, driven by the adoption of generative AI by major platforms such as Adobe. Customers were looking for a solution that could address both challenges: making documents easier to work with while also meeting rising user expectations and market standards.</p>

        <h4>My Role</h4>
          <ul>
              <li>Led customer discovery to understand expectations across platforms (desktop vs. mobile) and requirements such as security, accuracy, data privacy, performance with large documents, and integration flexibility.</li>
              <li>Translated insights into product requirements and roadmap priorities, in collaboration with engineering and design.</li>
              <li>Aligned stakeholders on delivering a cross-provider solution, supporting major LLM providers and on-premise/local models.</li>
          </ul>


        <h4>Actions & Solution</h4>
        <ul>
          <li>Integrated support for multiple model providers (OpenAI, Microsoft Azure OpenAI Service, Amazon Bedrock, and local LLMs).</li>
          <li>Designed SDK features for natural language querying, contextual Q&A, cross-document search, comparison, and inline editing (redaction).</li>
          <li>Delivered APIs and UX patterns that balanced simplicity with flexibility for diverse customer needs.</li>
          <li>Prioritised ease-of-use to ensure immediate value for end users, while maintaining flexibility for enterprise customers.</li>
        </ul>

        <h4>Impact</h4>
        <ul>
          <li>Enabled customers to ship competitive products faster, keeping pace with market leaders.</li>
          <li>Improved usability of large and complex documents, lowering friction in knowledge discovery.</li>
          <li>Established a foundation for advanced AI workflows within Nutrient SDK.</li>
        </ul>

        <h4>Next Step</h4>
        <p>Established a foundation for advanced AI workflows within Nutrient SDK.</p>

        <img src="/assets/mockup1.png" />
      </div>
     
    </div>
  );
};

export default PortfolioAIAssistant;