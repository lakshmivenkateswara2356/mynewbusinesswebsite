import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clintpicon from '../../Assets/clintimage.jpg';

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Startup Founder of Zixa Technologies",
      text: "One of the best services provided by this company. Highly recommended.",
    },
    {
      id: 2,
      name: "CEO of Tech Innovators",
      text: "Excellent service and support. The team is very professional and dedicated.",
    },
    {
      id: 3,
      name: "Manager at Creative Solutions",
      text: "A wonderful experience from start to finish. Great job!",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="adjustmentleccc">
        <h1 className="underline"></h1>
      </div>
      <div className="portfolio-list">
        <div className="portfolio-item">
          <h3>Chatting App</h3>
          <p className="allpara-styels">Creating a real-time chatting application using React.js</p>
          <button className="view-button">
            <a href="https://vercel.com/venkateswara">View Project</a>
          </button>
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
      </div>

      <h1 className="abouthedingstyle">What Our Clients Talk About Us</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} >
            <div className="clintser">
              <img src={clintpicon} alt="clint" className="clintinage" />
              <div className="elementalingmen">
                <h1 className="deroomi">{testimonial.name}</h1>
                <p className="molp-para">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;
