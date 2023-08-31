import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">MY PROFILE CARD</div>
      <ul className="navbar-links">
        <li>
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="navbar-link">
            About
          </a>
        </li>
        <li>
          <a href="/contacts" className="navbar-link">
            Contacts
          </a>
        </li>
      </ul>
     
    </nav>
  );
}

export default Navbar;
