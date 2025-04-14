import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>CONTACT US</h1>
      <p>Vous avez une question, une demande, ou envie de dire bonjour ?</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required placeholder="Nom" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="email@exemple.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Votre message"></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
