import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="inner-container">
       
       <header className="profile-header">
          <div className="header-text">
            <h1 className="name">STAŠA BUGARSKI</h1>
            <h2 className="title">PRODUCT MANAGER</h2>
            <p className="progression">
              <strong>Designer ➝ Software Developer ➝ Product Manager</strong>
            </p>

            <p className="summary">
              Hi! My name is Staša (that wierd letter “š” is pronounced like "sh").
              I’m a product professional based in New Zealand. I am a blend of product thinking, design, and engineering, which might just be my superpower.
              But more than anything, I love understanding people. Whether it’s customers and users and their needs, or in-house teams and their unique perspectives, I enjoy learning how to “speak their language” and bridge gaps to make things happen.
            </p>

          </div>
          <div className="header-image">
            <img src="/assets/profile.jpg" alt="Stasa Bugarski" />
          </div>
        </header>
      
      </div>
    </div>
  );
};

export default Home;