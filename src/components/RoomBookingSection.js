import React, { useState } from 'react';

const rooms = [
  { id: 1, hotel: 'Hotel Jagannath', location: 'Puri Beach', type: 'Standard Room', price: 2800, offer: '10% off' },
  { id: 2, hotel: 'Niladri Inn', location: 'Near Temple Gate', type: 'Deluxe Room', price: 4000, offer: '15% off' },
  { id: 3, hotel: 'Golden Nest', location: 'Grand Road', type: 'Suite', price: 6200, offer: '20% off' },
  { id: 4, hotel: 'Rath Yatra Residency', location: 'Market Square', type: 'AC Room', price: 3500, offer: 'Free Breakfast' },
];

const RoomBookingSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [mapQuery, setMapQuery] = useState('Puri Odisha Hotels');

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedRoom || !name || !email) {
      alert('Please fill all fields and select a room.');
      return;
    }
    setBookingConfirmed(true);
  };

  const handleMapSearch = (e) => {
    setMapQuery(e.target.value);
  };

  const room = rooms.find(r => r.id === selectedRoom);

  return (
    <section style={{
      padding: '30px',
      maxWidth: '700px',
      margin: '50px auto',
      background: 'linear-gradient(135deg, #442c2e, #7d4141)',
      borderRadius: '16px',
      color: '#fff',
      boxShadow: '0 0 18px rgba(0,0,0,0.4)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🏨 Book Your Stay</h2>

      {bookingConfirmed ? (
        <div style={{ textAlign: 'center', lineHeight: '1.6' }}>
          <h3>Thank you, {name}!</h3>
          <p>Your booking at <strong>{room.hotel}</strong> (<em>{room.type}</em>) for <strong>₹{room.price}</strong> has been confirmed.</p>
          <p>We’ve sent a confirmation email to <strong>{email}</strong>.</p>
          <p style={{ marginTop: '20px', fontStyle: 'italic' }}>🙏 We look forward to welcoming you. Have a divine Rath Yatra experience!</p>
        </div>
      ) : (
        <form onSubmit={handleBooking}>
          <label style={{ display: 'block', marginBottom: '15px' }}>
            <strong>Select Room:</strong>
            <select
              value={selectedRoom || ''}
              onChange={(e) => setSelectedRoom(Number(e.target.value))}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '8px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#fff',
                color: '#333'
              }}
            >
              <option value="" disabled>Select a room</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>
                  {room.hotel} - {room.type} @ ₹{room.price} ({room.offer})
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '15px' }}>
            <strong>Name:</strong>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                marginTop: '5px'
              }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '20px' }}>
            <strong>Email:</strong>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                marginTop: '5px'
              }}
            />
          </label>

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#ff914d',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            ✅ Book Now
          </button>
        </form>
      )}

      {/* 🗺️ Map Search Section */}
      <div style={{ marginTop: '40px' }}>
        <h3>📍 Find Hotels on Map</h3>
        <input
          type="text"
          placeholder="Search location or hotel (e.g. Puri Beach, Rath Yatra)"
          value={mapQuery}
          onChange={handleMapSearch}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0 20px 0',
            borderRadius: '8px',
            border: 'none',
            color: '#333'
          }}
        />
        <iframe
          title="Map Search"
          width="100%"
          height="300"
          style={{ border: '0', borderRadius: '12px' }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
        ></iframe>
      </div>
    </section>
  );
};

export default RoomBookingSection;
