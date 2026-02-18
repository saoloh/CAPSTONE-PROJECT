import React, { useState } from 'react';

/**
 * BookingForm component that handles user input for table reservations.
 * Includes basic validation and accessibility for all form fields.
 * 
 * @param {Object} props
 * @param {Array} props.availableTimes - List of times available for the selected date.
 * @param {Function} props.dispatch - Reducer dispatch function (or state setter) to update times based on date change.
 */
const BookingForm = ({ availableTimes, updateTimes }) => {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  /**
   * Handles date change and triggers available times update.
   */
  const handleDateChange = (e) => {
    setResDate(e.target.value);
    updateTimes(e.target.value);
  };

  /**
   * Handles form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Submitted:', { resDate, resTime, guests, occasion });
    alert('Table reserved successfully!');
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit} aria-label="Table reservation form">
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={resDate} 
        onChange={handleDateChange} 
        required 
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={resTime} 
        onChange={(e) => setResTime(e.target.value)}
        required
        aria-label="Selection of reservation time"
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required
        aria-label="Number of guests for reservation"
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Selection of occasion for reservation"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input 
        type="submit" 
        value="Make Your reservation" 
        aria-label="Submit reservation form"
        style={{ backgroundColor: '#F4CE14', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
      />
    </form>
  );
};

export default BookingForm;
