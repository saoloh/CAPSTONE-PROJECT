import React from 'react';
import logo from '../assets/icons_assets/Logo .svg';

/**
 * Header component that displays the company logo and primary navigation.
 * Uses semantic <header> and <nav> tags for accessibility.
 */
const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="/" aria-label="Go to Home">Home</a></li>
          <li><a href="/#menu" aria-label="Go to Menu">Menu</a></li>
          <li><a href="/about" aria-label="Go to About">About</a></li>
          <li><a href="/order" aria-label="Go to Order Online">Order Online</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
