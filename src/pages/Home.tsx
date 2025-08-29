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
              <br /><br />
            </p>

            <p className="summary">
              Hi! My name is Staša (the funny-looking letter “š” is pronounced like “sh” in “ship”).
              <br /><br />
              I’m a product professional based in New Zealand, with a background in software engineering and design. This mix lets me see both the big picture and the little details, and helps me speak the language of different teams.
              <br /><br />
              I’m endlessly curious and love challenges, but what drives me most is people. Whether it’s understanding users and their needs, or collaborating with in-house teams and navigating their unique perspectives, I genuinely enjoy building those bridges and helping everyone move forward together.
              <br /><br />
              I believe that no great product is ever built by a single person. I’m a true team player, and I find the most meaning in working with kind, thoughtful, and brilliant people who care about what they do, and about each other.</p>
            <br /><br />
            And in my free time? I run, do yoga, hike, camp, love my husband and dog, my family and friends. I don’t drink coffee, my morning fuel is a black tea. And of course — food: eating it, cooking it, smelling it, or simply lookin at it.
            <br />
            Travel fills my soul. Music moves it. And doodling just makes it funnier.
          </div>
          <div className="header-image">
            <img className="glass-box" src="/assets/profile.jpg" alt="Stasa Bugarski" />
          </div>
        </header>

      </div>
    </div>
  );
};

export default Home;