import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section id="Aboutme" className="about-section">
      <h2 className="headings">LET'S BUILD</h2>
      <h2 className="sub headings">SOMETHING AMAZING!</h2>
      <br />

      <div className="contact-container">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        <img className="contact-img" src="/mail.svg" alt="mail" />
      </div>
    </section>
  );
};

export default Contact;
