"use client";
import { useState } from 'react';
import Header from '../header';
import Footer from '../footer';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    numPeople: "",
    reservationDate: "",
    reservationTime: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmitClick = (e: any) => {
    // Break up the information sent in by the form into its individual parts
    const {name, numPeople, reservationDate, reservationTime, message} = formData;

    // Prepare a confirmation message
    const confirmationMessage = `Reservation confirmed! You are booked under ${name} for ${numPeople} people on ${reservationDate} at ${reservationTime}. You have also said ${message}. See you then!`;

    // Display the confirmation message with an alert
    alert(confirmationMessage);

    // Reset the values of formData
    setFormData({
        name: "",
        numPeople: "",
        reservationDate: "",
        reservationTime: "",
        message: ""
    });
  }

  return (
    <>
      <Header />
      <h2>Book a reservation today!</h2>
      <form className="reservationForm">
        <div className="nameForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="numPeopleForm">
          <label htmlFor="numPeople">Number of People (max 10):</label> 
          <input type="number" id="numPeople" name="numPeople" min="1" max="10" value={formData.numPeople} onChange={handleChange} />
        </div>
        <div className="reservationDateForm">
          <label htmlFor="reservationDate">Date:</label>
          <input type="date" id="reservationDate" name="reservationDate" value={formData.reservationDate} onChange={handleChange} />
        </div>
        <div className="reservationTimeForm">
          <label htmlFor="reservationTime">Time:</label>
          <input type="time" id="reservationTime" name="reservationTime" value={formData.reservationTime} onChange={handleChange} />
        </div>
        <div className="messageForm">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" value={formData.message} onChange={handleChange} />
        </div>
        <input type="submit" className="submitButton" id="submitButton" value="Submit" onClick={handleSubmitClick} />   
      </form>
      <Footer />
    </>
  );
}

export default Reservation;