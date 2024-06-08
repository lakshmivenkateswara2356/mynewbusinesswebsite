import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Linkedin, Mail,Github, CircleUserRound, } from 'lucide-react'





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
      <div className="adjustmentlec"><h1 className="underline"></h1></div>
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
              className="textarea-fieldee"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
      <div className='minisecpokl'>
        <div className="koopw">
      <div className='ContactVasuAlignee'>
            <a href="mailto:lakshmivenkateswarapunnam@gmail.com" className='contactGmail1ee'>
            <Mail />
        </a>
        </div>
        <div className='ContactVasuAlignee'>
       <a href='https://web.whatsapp.com+91 7842802368/' > <CircleUserRound className='contactGmail1ee'/> </a>
       </div>
       
       <div className='ContactVasuAlignee'> 
       <a href=" https://www.linkedin.com/in/p-lakshmi-venkateswara-144510236/"><Linkedin className='contactGmail1ee' /></a>
       </div>
       <div className='ContactVasuAlignee'>
       <a href="https://github.com/lakshmivenkateswara2356"><Github className='contactGmail1ee' /></a>
       </div>
       </div>
       
       <h1>vasy</h1>
       
      </div>
    </section>
  );
}

export default Contact;
