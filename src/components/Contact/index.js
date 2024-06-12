import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CiMail } from "react-icons/ci";
import { Linkedin, Mail, Github, CircleUserRound } from 'lucide-react';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zg2af0f', 'JasT7P_ce657_eFFm', e.target, 'JasT7P_ce657_eFFm')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="underline"></div>
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="informaton-edt">
            <label>
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label>
            <textarea
              name="message"
              className="textarea-field"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="social-icons">
          <a href="mailto:lakshmivenkateswarapunnam@gmail.com" className='social-icon'>
            <Mail />
          </a>
          <a href='https://web.whatsapp.com+91 7842802368/' className='social-icon'>
            <CircleUserRound />
          </a>
          <a href="https://www.linkedin.com/in/p-lakshmi-venkateswara-144510236/" className='social-icon'>
            <Linkedin />
          </a>
          <a href="https://github.com/lakshmivenkateswara2356" className='social-icon'>
            <Github />
          </a>
        </div>
        <div className="additional-info">
          <div className='looper'>
          <h1 className='herculous'>About Us</h1>
          <p lassName='pooert'>We are committed to trustworthy service.</p>
          <p lassName='pooert'>Zixa Technologies was established by Venkateswara.</p>
          </div>
         <div className='looper'>
          <h1 className='herculous'>Contact</h1>
          <p className='pooert'><a href='punnam8278@gmail.com'>punnam8278@gmail.com</a></p>
          <p>7842802368</p>
         </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
