import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import SemiBanner from '../components/SemiBanner';

function Home() {
  return (
    <div className="home">
      <Banner />
      <hr />
      <div className="home-content">
        <div className="text-section">
          <h1>Bienvenue sur HOMIES</h1>
          <p>Votre plateforme de location de villas.</p>
          <p>Découvrez nos magnifiques propriétés et réservez votre séjour dès maintenant !</p>
          <p>Explorez nos villas uniques et profitez d'une expérience inoubliable.</p>
          <p>Nous sommes là pour rendre votre séjour facile et sans prises de têtes.</p>
        </div>
        <div className="banner-section">
          <SemiBanner />
        </div>
      <hr />
      </div>
    </div>
  );
}

export default Home;
