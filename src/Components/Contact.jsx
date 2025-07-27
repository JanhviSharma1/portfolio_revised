import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const Contact = () => {
  const formRef = useRef();
  const [showNotif, setShowNotif] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cek4ptl",
        "template_z8l7adx",
        formRef.current,
        "aR6fcXVOoHJzEy60q"
      )
      .then(
        () => {
          setShowNotif(true);
          e.target.reset();

          setTimeout(() => {
            setShowNotif(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="about-section">
      {showNotif && (
        <div className="toast-notif">Your message was sent successfully!</div>
      )}

      <h2 className="headings">LET'S BUILD</h2>
      <h2 className="sub headings">SOMETHING AMAZING!</h2>
      <br />

      <div className="contact-container">
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
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
