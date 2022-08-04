import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">English Learning</a>
      <ul>
        <li className="active">
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/resources"> Resources </Link>
        </li>
        <li>
          <Link to="/dictionary"> Dictionary </Link>
        </li>
        <li>
          <Link to="/courses"> Online Tutoring </Link>
        </li>
        <button type="button">Sign in</button>
      </ul>

    </nav>

  );
}

export default Navbar;
