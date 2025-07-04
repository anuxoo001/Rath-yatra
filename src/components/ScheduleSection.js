import React from 'react';

const events = [
  { time: '10:00 AM', title: 'Rath Yatra Procession Begins' },
  { time: '12:00 PM', title: 'Prasadam Distribution' },
  { time: '02:00 PM', title: 'Cultural Performances' },
  { time: '04:00 PM', title: 'Evening Aarti & Kirtan' },
];

const ScheduleSection = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Event Schedule</h2>
      <ul style={styles.list}>
        {events.map((event, i) => (
          <li key={i} style={styles.item}>
            <strong>{event.time}</strong> – {event.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#ffe0b2',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    color: '#bf360c',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '18px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left',
  },
  item: {
    marginBottom: '12px',
  },
};

export default ScheduleSection;
