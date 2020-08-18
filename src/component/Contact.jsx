import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <p>Contact</p>
      </div>
      <div class="contact-links">
        <a href="#" target="_blank" className="btn contact-details">
          <i className="fab fa-github">Github</i>
        </a>

        <a href="#" target="_blank" className="btn contact-details">
          <i className="fab fa-twitter">Twitter</i>
        </a>

        <a href="#" target="_blank" className="btn contact-details">
          <i className="fab fa-at">Email</i>
        </a>

        <a href="#" target="_blank" className="btn contact-details">
          <i className="fab fa-mobile-alt">Mobile</i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
