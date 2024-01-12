import React from "react";
import "@fontsource/pacifico"; //imported the font for the logo
import "@fontsource/bree-serif"; // imported font 
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './header.js';
import HomePage from './HomePage.jsx'; 
import CreateEvent from './CreateEvent.jsx'; 
import CommunityPage from './CommunityPage.jsx';
import AboutUs from './AboutUs.jsx';
import RSVPForm from "./RSVPForm.jsx";
import RSVPButton from "./RSVPButton.jsx";
import RSVPList from "./RSVPList.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/community-page" element={<CommunityPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/RSVP/:eventId" element={<RSVPButton />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/rsvp-form/:eventTitle" element={<RSVPForm/>} />
      </Routes>
    </div>
  );
}

export default App;
