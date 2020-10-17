import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-link">
        <a
          aria-label="Serin Twitter"
          href="https://twitter.com/SerinJeon"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <i className="footer fa fa-twitter"></i>
        </a>
        <a
         aria-label="Serin Linkedin"
          href="https://www.linkedin.com/in/serin-jeon/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <i className="footer fa fa-linkedin"></i>
        </a>
        <a
            aria-label="Serin Github"
          href="https://github.com/serin0837"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <i className="footer fa fa-github"></i>
        </a>

        <a
          aria-label="Email Serin"
          href="mailto:serin0837@icloud.com"
          // data-position="top"
          // data-tooltip="Email Serin"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <i className="footer fa fa-envelope"></i>
        </a>
      </div>

      <div>
        <p> &copy; 2020. Serin Jeon - all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
