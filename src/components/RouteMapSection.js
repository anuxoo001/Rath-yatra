import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Example Rath Yatra route points
const route = [
  [19.8135, 85.8312], // Jagannath Temple
  [19.8147, 85.8370], // Market Road
  [19.8190, 85.8395], // Gundicha Temple
];

// Component to change map center
const ChangeMapView = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.setView(coords, 15);
  }
  return null;
};

const RouteMapSection = () => {
  const [search, setSearch] = useState('');
  const [searchedCoords, setSearchedCoords] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setSearchedCoords([lat, lon]);
      } else {
        alert('Location not found. Try a nearby landmark or area.');
      }
    } catch (err) {
      console.error('Search error:', err);
      alert('Something went wrong while searching.');
    }
  };

  return (
    <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>🛕 Rath Yatra Route Map</h2>

      {/* 🔍 Search Bar */}
      <form onSubmit={handleSearch} style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search location in Puri (e.g. Grand Road)"
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            borderRadius: '8px',
            backgroundColor: '#ff914d',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      <MapContainer center={route[0]} zoom={14} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {/* Set map view to searched coordinates if any */}
        {searchedCoords && <ChangeMapView coords={searchedCoords} />}

        <Marker position={route[0]}>
          <Popup>Jagannath Temple</Popup>
        </Marker>
        <Marker position={route[2]}>
          <Popup>Gundicha Temple</Popup>
        </Marker>
        <Polyline positions={route} color="blue" />
      </MapContainer>
    </section>
  );
};

export default RouteMapSection;
