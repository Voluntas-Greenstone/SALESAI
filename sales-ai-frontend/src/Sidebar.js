import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="Sidebar">
      <nav className="Sidebar-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
/* Test comment */
