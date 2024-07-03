import React from 'react';
import './Header.css';
import logo from './logo.svg';  // Ensure the logo.svg is present in the src directory

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        <img src={logo} alt="Sales AI Logo" />
      </div>
      <nav className="Header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
/* Test comment */
