import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <video className="banner-video" autoPlay muted loop playsInline>
        <source src="/videos/banner-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
      <div className="banner-content">
        <h1>Feels like you're Homies</h1>
      </div>

    </div>
  )
}

export default Banner
