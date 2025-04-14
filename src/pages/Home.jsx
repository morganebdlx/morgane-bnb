import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import SemiBanner from '../components/SemiBanner';

function Home() {
  return (
    <div className="home">
      <Banner />
      <hr />
      <div className="home-vintage">
        <div className="scrolling-text">
           Soleil - Mer - Plage - Océan - Villa - Luxe - Confort - Détente - Vacances - Évasion - Nature - Sérénité - Bien-être - Famille - Amis - Souvenirs - Bonheur - Voyage - Découverte - Aventure - Liberté - Rêve - Paradis
        </div>
        <div className="scrolling-text reverse">
           Soleil - Mer - Plage - Océan - Villa - Luxe - Confort - Détente - Vacances - Évasion - Nature - Sérénité - Bien-être - Famille - Amis - Souvenirs - Bonheur - Voyage - Découverte - Aventure - Liberté - Rêve - Paradis
        </div>
      <img src="/images/illustration.png" alt="illustration soleil vintage" className="home-image" />
      </div>
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
      </div>
      <hr />
    </div>
  );
}

export default Home;
