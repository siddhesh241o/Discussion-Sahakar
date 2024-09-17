import React from 'react';
import Calendar from '../Components/Calendar'; 
import styles from './Seminar.module.css'; 

const Seminar = () => {
  return (
    <>
      <h1 className={styles.heading}>Seminars & Workshops </h1>
      
      <div className={styles.cardsList}>
        <div className={styles.card}>
          <h2>Digital Governance & E-Government Solutions</h2>
          <p>Date: 28th September 2024</p>
          <p>Time: 9:00 AM - 11:00 AM</p>
          <a href="https://www.youtube.com/watch?v=0c5zM6r6oGc&ab_channel=JoshiJagdish" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>WATCH</button>
          </a>
        </div>
     
        <div className={styles.card}>
          <h2>Digital Literacy in Public Sector</h2>
          <p>Date: 30th September 2024</p>
          <p>Time: 1:00 PM - 3:00 PM</p>
          <a href="https://youtu.be/8o96ey4jCgE?feature=shared" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>WATCH</button>
          </a>
        </div>

        <div className={styles.card}>
          <h2>Workshop: Implementing Smart Cities</h2>
          <p>Date: 5th October 2024</p>
          <p>Time: 10:00 AM - 4:00 PM</p>
          <a href="https://www.youtube.com/watch?v=smartCitiesWorkshopLink" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>WATCH</button>
          </a>
        </div>
      </div>

      <div className={styles.calendarContainer}>
        <h2 className={styles.calendarHeading}>Event Calendar</h2>
        <Calendar />
      </div>
    </>
  );
}

export default Seminar;
