import React from 'react';
import clintpicon from '../../Assets/clintimage.jpg';


function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="adjustmentleccc"><h1 className="underline"></h1></div>
      <div className="portfolio-list">
        <div className="portfolio-item">
          <h3>Chatting App</h3>
          <p className="allpara-styels">Creating a real-time chatting application using React.js</p>
          <button  className="view-button" ><a herf="https://vercel.com/venkateswara">View Project</a></button>
        </div>
        <div className="portfolio-item">
          <h3>Nextrendz</h3>
          <p className="allpara-styels">Shopping application using technologies like HTML, CSS, JavaScript, and React.js</p>
          <button className="view-button">View Project</button>
        </div>
        <div className="portfolio-item">
          <h3>Dashboard</h3>
          <p className="allpara-styels">Comprehensive dashboard for managing various data points efficiently.</p>
          <button className="view-button">View Project</button>
        </div>
        <div >
        <h1 className="abouthedingstyle"> What Our clients talk abut us</h1>
      <div className="sizing">
      <div className="clintser">
        <img src={clintpicon} alt="clint" className="clintinage"/>
        <div className="elementalingmen">
        <h1>Startup Founder of Zixa Technologies</h1>
          <p className="molp-para">One of the bestservices pkdsjf kjkSHDF kj kajdshf kjs df lksdj slkdjf slskdjf srovided by thiskvlxk xlkjv kdkfjs slkdflkdj jdaf  adskjf ka </p>
          
          
        </div>
      </div>

      </div>
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
