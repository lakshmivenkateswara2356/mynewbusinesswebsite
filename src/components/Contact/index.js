import React, { useState } from 'react';
import emailjs from 'emailjs-com';


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
          alert('Failed to send message. Please try again. or reach out me lakshmivenkateswarapunnam@gmail.com');
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
    </section>
  );
}

export default Contact;
