import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div>
    {/* Image pleine largeur avant le footer */}
    <div className="footer-image"></div>

    {/* Contenu du footer */}
    <div className="footer">
      <p className="big-p">HOMIES</p>
      <p>&copy; 2025 HOMIES. Tous droits réservés.</p>
    </div>
    </div>
  );
}

export default Footer;
