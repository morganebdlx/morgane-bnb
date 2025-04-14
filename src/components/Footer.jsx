import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
    {/* Image pleine largeur avant le footer */}
    <div className="footer-image"></div>

    {/* Contenu du footer */}
    <div className="footer">
    <div className="button-more">
      <Link to="/about">
        <button className="button-more-text">About Us</button>
      </Link>
      <Link to="/contact">
        <button className="button-more-text">Contact</button>
      </Link>
      </div>
      <p className="big-p">HOMIES</p>
      <p>&copy; 2025 HOMIES. Tous droits réservés.</p>
    </div>
    </div>
  );
}

export default Footer;
