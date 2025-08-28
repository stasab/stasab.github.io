import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container">
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
      </div>
    </div>
  );
};

export default Contact;