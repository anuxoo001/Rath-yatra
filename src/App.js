import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import LiveStreamSection from './components/LiveStreamSection';
import FoodStallsSection from './components/FoodStallsSection';
import ScheduleSection from './components/ScheduleSection';
import RouteMapSection from './components/RouteMapSection';
import HighlightsSection from './components/HighlightsSection';
import Footer from './components/Footer';
import RoomBookingSection from './components/RoomBookingSection'; // import new component
import './App.css';



function App() {
  return (
    <>
      <HeaderBanner />
      <LiveStreamSection />
      <FoodStallsSection />
      <ScheduleSection />
      <RouteMapSection />
      <HighlightsSection />
      <RoomBookingSection /> {/* Add it here */}
      <Footer />
     
    </>
  );
}

export default App;
