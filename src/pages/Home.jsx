import React from 'react';
import { Link } from 'react-router-dom';
import listings from '../listingsData';

function Home() {
  return (
    <div className="home">
      <h1>Mini Airbnb</h1>
      <div className="listings">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <Link to={`/listings/${listing.id}`}>
              <img src={listing.image} alt={listing.name} />
              <h2>{listing.name}</h2>
              <p>{listing.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
