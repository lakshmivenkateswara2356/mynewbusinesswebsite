import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-list">
        <div className="portfolio-item">
          <h3>Chating app</h3>
          <p>Creating a real time chating application using react.js</p>
        </div>
        <div className="portfolio-item">
          <h3>Nextrendz</h3>
          <p>Description of Project 2.</p>
        </div>
        <div className="portfolio-item">
          <h3>Dashboard</h3>
          <p>Description of Project 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
