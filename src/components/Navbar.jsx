import React from 'react';
import "../styles/Navbar.css"

const Navbar = ({score, bestScore}) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>How's Your Memory?</h1>
        <p>Click on any card twice, you lose.</p>
      </div>

      <div className="score-container">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </nav>
  );
};

export default Navbar;