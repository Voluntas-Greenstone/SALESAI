import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {new Date().getFullYear()} Sales AI. All rights reserved.</p>
      <nav className="Footer-nav">
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
/* Test comment */
