import React from 'react';
import { Link } from 'react-router-dom';
import listings from '../listingsData';
import './Listings.css';

function Listings() {
  return (
    <div className="listings-page">
      <h1>Nos Villas</h1>
      <div className="listings">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <Link to={`/listing/${listing.id}`}>
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

export default Listings;
