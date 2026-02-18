import React from 'react';
import heroImage from '../assets/images/d47e626abe72ff61d38b0578618f1a9019b0c018.png';

/**
 * Hero section component showcasing the restaurant's primary value proposition.
 * Includes a call-to-action button for table reservations.
 * 
 * @param {Object} props
 * @param {Function} props.onReserve - Function to execute when the reserve button is clicked.
 */
const Hero = ({ onReserve }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <h1 id="hero-title">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button 
          aria-label="Reserve a table" 
          onClick={onReserve}
        >
          Reserve a Table
        </button>
      </div>
      <div>
        <img src={heroImage} alt="Delicious Mediterranean food served at Little Lemon restaurant" />
      </div>
    </section>
  );
};

export default Hero;
