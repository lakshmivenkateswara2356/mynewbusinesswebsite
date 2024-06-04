import React from 'react';


function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="underline"></div>
      <div className="portfolio-list">
        <div className="portfolio-item">
          <h3>Chatting App</h3>
          <p>Creating a real-time chatting application using React.js</p>
          <button className="view-button">View Project</button>
        </div>
        <div className="portfolio-item">
          <h3>Nextrendz</h3>
          <p>Shopping application using technologies like HTML, CSS, JavaScript, and React.js</p>
          <button className="view-button">View Project</button>
        </div>
        <div className="portfolio-item">
          <h3>Dashboard</h3>
          <p>Comprehensive dashboard for managing various data points efficiently.</p>
          <button className="view-button">View Project</button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
