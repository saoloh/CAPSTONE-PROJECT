import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

/**
 * Reducer function to update available reservation times based on selected date.
 * 
 * @param {Array} state - Current list of available times.
 * @param {Object} action - Action object containing the date selected.
 * @returns {Array} New list of available times.
 */
const updateTimesReducer = (state, action) => {
  // Mock logic: Update times based on date change.
  // In a real application, you might fetch these from an API.
  const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  return times;
};

/**
 * Initial available times state.
 */
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

/**
 * BookingPage component that serves as the reservation interface.
 * Manages the state for available table reservation times.
 */
const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimesReducer, [], initializeTimes);

  /**
   * Dispatches an update action when the date in the form changes.
   */
  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  return (
    <main style={{ padding: '40px 10%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'Markazi Text, serif', color: '#495E57', fontSize: '48px' }}>Reserve a Table</h1>
      <p style={{ marginBottom: '30px', color: '#333333', fontSize: '18px' }}>
        Please fill out the form below to book your table at Little Lemon.
      </p>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </main>
  );
};

export default BookingPage;
