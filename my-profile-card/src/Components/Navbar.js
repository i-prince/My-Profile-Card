import React from "react";

function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-title">MY PROFILE CARD</div>
      <a href="/home"className="navbar-link">Home</a>
      <a href="/about"className="navbar-link">About</a>
      <a href="/contacts"className="navbar-link">Contacts</a>
    </nav>
  );
}

export default Navbar;