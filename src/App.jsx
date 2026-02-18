import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import './App.css';

/**
 * Main App component that handles conditional rendering of views.
 * Simulates routing using React state (isBookingView).
 */
function App() {
  const [isBookingView, setIsBookingView] = useState(false);

  /**
   * Toggles the view state between home and booking.
   */
  const handleBookingToggle = () => {
    setIsBookingView(!isBookingView);
    // Scroll to top on page change
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <main>
        {isBookingView ? (
          <BookingPage />
        ) : (
          <>
            <Hero onReserve={handleBookingToggle} />
            <Menu />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
