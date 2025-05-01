
import React from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="subscribe">
        <h2>Subscribe To Get The Latest News About Us</h2>
        <p>Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature.</p>
        <div className="subscribe-input">
          <input type="email" placeholder="Enter your mail..." />
          <button>Send</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3 className="logo">Agency</h3>
          <p>
            Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature.
          </p>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>Our Team</li>
            <li>Partner With Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get In Touch</h4>
          <p>ion or Feedback?</p>
          <p>We’d love to hear from you</p>
          <div className="social-icons">
            <span>P</span>
            <span>I</span>
            <span>F</span>
            <span>Y</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
