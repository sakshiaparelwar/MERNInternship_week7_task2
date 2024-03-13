import React from "react";
import "./contact.css";

function ContactForm() {
  return (
    <>
      <div id="contact_container">
        <h1>Contact us</h1>
        <p>feel free to ask any quries or doubts,etc.</p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name..." />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email..." />
          <label htmlFor="msg">Message</label>
          <textarea id="msg" cols="20" rows="5">
            Start writing here...
          </textarea>
          <input type="submit" id="submit" />
        </form>
      </div>
    </>
  );
}

export default ContactForm;
