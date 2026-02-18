import React from 'react';
import logo from '../assets/icons_assets/Logo .svg';

/**
 * Footer component that contains navigation links, contact information, and social media.
 * Uses semantic <footer> for accessibility.
 */
const Footer = () => {
  return (
    <footer aria-label="Little Lemon Footer">
      <img src={logo} alt="Little Lemon alternative Logo" />
      <nav aria-labelledby="footer-navigation">
        <h3 id="footer-navigation">Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/#menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <section aria-labelledby="footer-contact">
        <h3 id="footer-contact">Contact</h3>
        <ul>
          <li>123 Lemon Street, Chicago</li>
          <li>(555) 123-4567</li>
          <li>contact@littlelemon.com</li>
        </ul>
      </section>
      <section aria-labelledby="footer-social">
        <h3 id="footer-social">Social Media Links</h3>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
