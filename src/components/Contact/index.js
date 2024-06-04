import React from 'react';


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="adjustmentlec"><h1 className="underline"></h1></div>
      <div className="form-container">
        <form className="contact-form">
          <label>
            <input type="text" name="name" className="input-field" placeholder="Name" />
          </label>
          <label>
            <input type="email" name="email" className="input-field" placeholder="Email" />
          </label>
          <label>
            <textarea name="message" className="textarea-field" placeholder="Enter your message here"></textarea>
          </label>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
