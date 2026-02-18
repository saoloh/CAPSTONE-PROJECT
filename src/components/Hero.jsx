import React from 'react';
import heroImage from '../assets/images/d47e626abe72ff61d38b0578618f1a9019b0c018.png';

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div>
        <img src={heroImage} alt="Restaurant Food" />
      </div>
    </section>
  );
};

export default Hero;
