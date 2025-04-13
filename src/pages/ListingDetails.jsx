import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import listings from '../listingsData';
import './ListingDetails.css';

function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listings.find((item) => item.id === parseInt(id));

  if (!listing) {
    return <h2>Logement introuvable</h2>;
  }

  return (
    <div className="listing-details">
      <h1>{listing.name}</h1>
      <img src={listing.image} alt={listing.name} />
      <p>{listing.description}</p>
      <p><strong>{listing.price}</strong></p>
      <button onClick={() => navigate(-1)}>← Retour</button>
    </div>
  );
}

export default ListingDetails;
