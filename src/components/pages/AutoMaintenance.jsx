import React, { useEffect, useState } from 'react';
import styles from './AutoMaintenance.module.css';
import data from '../../assets/maintenance.json'


function AutoMaintenance() {
    const [maintenance, setMaintenance] = useState({ current: [], legacy: [] });

    useEffect(() => {
      setMaintenance(data);
    }, []);

    return (
    <div className={styles.pageWrapper}>
      <h1>Vehicle Maintenance Tracker</h1>
      <p className={styles.intro}>
        Keep track of upcoming maintenance for your car, and review previous maintenance records from previous owners.
      </p>

      {/* Upcoming Maintenance */}
      <section>
        <h2>My Maintenance</h2>
        {maintenance.current?.map((item) => (
          <div key={item.id} className={styles.card}>
            {item.image && <img src={item.image} alt={item.title} className={styles.cardImage} />}
            <h3>{item.title}</h3>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Mileage:</strong> {item.mileage}</p>
            <p>{item.notes}</p>
          </div>
        ))}
      </section>

      {/* Legacy Maintenance */}
      <section>
        <h2>Previous Owners' Maintenance</h2>
        {maintenance.legacy?.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3>{item.title}</h3>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Mileage:</strong> {item.mileage}</p>
            <p>{item.notes}</p>
          </div>
        ))}
      </section>
    </div>
    );
}

export default AutoMaintenance;
