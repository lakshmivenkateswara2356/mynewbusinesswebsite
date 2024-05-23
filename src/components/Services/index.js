import React from 'react';


function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <marquee>
      <div className="service-list">
        <div className="service">
          <h3>Frontend Development</h3>
          <p>Creating responsive and interactive user interfaces using modern frameworks.</p>
          <p>using latest technologies was developing</p>
        </div>
        <div className="service">
          <h3>Backend Development</h3>
          <p>Building robust server-side applications and RESTful APIs.</p>
        </div>
        <div className="service">
          <h3>Fullstack Solutions</h3>
          <p>Providing complete end-to-end web development services.</p>
        </div>
      </div>
      </marquee>
    </section>
  );
}

export default Services;
