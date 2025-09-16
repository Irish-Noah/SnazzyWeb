import React from 'react';
import styles from './AutoMaintenance.module.css';

function Maintenance() {
  return (
    <div className={styles.page}>
      <h1>Car Maintenance Tracker</h1>
      <p className={styles.description}>
        This page will help me keep track of upcoming and completed maintenance on my BMW.
        I’ll add oil changes, brakes, tires, and more as I go.
      </p>

      <ul className={styles.maintenanceList}>
        <li>Oil Change – Due at 55,000 miles</li>
        <li>Brake Pads – Last replaced at 52,000 miles</li>
        <li>Tires – Rotated at 50,000 miles</li>
      </ul>
    </div>
  );
}

export default Maintenance;
