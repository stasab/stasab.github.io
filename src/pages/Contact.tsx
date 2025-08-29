import React from 'react';


const Contact: React.FC = () => {
  return (
    <div className="container contact">
      <div className="inner-container">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to get in touch, please reach out!</p>

        <p>
          <a href="mailto:stasa.bugarski@gmail.com">stasa.bugarski@gmail.com</a>
        </p>
        <p>
          <a href="tel:+6402904316995">+64 29 043 16 995</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/stasa-bugarski/" target='_blank'>LinkedIn</a>
        </p>


        <div className="cv-buttons">
          <a href={`${process.env.PUBLIC_URL}/assets/Stasa_Bugarski_CV.pdf`} download>
            <button className="cv-button">Download CV</button>
          </a>
          <a href={`${process.env.PUBLIC_URL}/assets/Stasa_Bugarski_Portfolio.pdf`} download>
            <button className="cv-button">Download Portfolio</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;