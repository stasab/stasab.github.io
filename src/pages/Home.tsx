import React from 'react';
import profileImage from "../assets/profile.jpg";

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
              I bring a rare mix of design, engineering, and product thinking. I’m always team-first,
              empathy-led, and focused on impact and getting things done.
            </p>
          </div>
          <div className="header-image">
            <img src={profileImage} alt="Stasa Bugarski" />
          </div>
        </header>
      
      </div>
    </div>
  );
};

export default Home;