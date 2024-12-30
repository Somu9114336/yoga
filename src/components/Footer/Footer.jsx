import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: support@yogamaya.com</p>
          <p>Phone: +91 9114336976</p>
          <p>Address: at/po-adaspur,Dist-cuttack,pin-754011,india</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>< Link to='/'>Home</Link></li>
            <li>< Link to='/about'>About</Link></li>
            <li>< Link to='/schedule'>Schedule</Link></li>
            <li>< Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yoga-maya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
