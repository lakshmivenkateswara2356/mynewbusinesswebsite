import React from 'react';


function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div >
      <form className="Container">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <div>
        <button type="submit">Send</button>
        </div>
      </form>
      </div>
    </section>
  );
}

export default Contact;
