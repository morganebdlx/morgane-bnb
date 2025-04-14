import React from 'react';
import './SemiBanner.css';

const Banner = () => {
  return (
    <div className="semibanner">
      <video className="semibanner-video" autoPlay muted loop playsInline>
        <source src="/videos/porte.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Banner
