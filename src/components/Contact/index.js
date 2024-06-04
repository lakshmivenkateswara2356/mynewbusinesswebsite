import React from 'react';


function Contact() {
  return (
    <section id="contact" className="totalcontact">
      <h2>Contact Us</h2>
      <div >
      <form className="Container">
        <label>
          
          <input type="text" name="name"className="nameele" placeholder="Name" />
        </label>
        <label>
         
          <input type="email" name="email"className="nameele" placeholder="Email"  />
        </label>
        <label >
          
          <textarea type="" name="message" className="messaret" placeholder="Enter your text here"></textarea>
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
