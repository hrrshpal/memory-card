import React from 'react';
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>Memory Card</h1>
        <p>You click twice on any card, you lose</p>
      </div>

      <div className="score-container">
        <p>Score: 0</p>
        <p>Best Score: 0</p>
      </div>
    </nav>
  );
};

export default Navbar;