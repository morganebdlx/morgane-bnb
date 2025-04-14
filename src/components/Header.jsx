import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="logo-container">
      <img src="/images/HOMIES.png" alt="Logo Homies" className="logo" />
      </div>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Listings">VILLAS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
