import React from 'react';


function Contact() {
  return (
    <section id="contact" className="totalcontact">
      <h2>Contact Us</h2>
      <div >
      <form className="Container">
        <label>
          Name:
          <input type="text" name="name"className="nameele" />
        </label>
        <label>
          Email:
          <input type="email" name="email"className="nameele" />
        </label>
        <label >
          Message:
          <textarea type="" name="message" className="messaret"></textarea>
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
