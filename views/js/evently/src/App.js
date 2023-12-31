import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './header.js';
import HomePage from './HomePage.jsx'; 
import CreateEvent from './CreateEvent.jsx'; 
import CommunityPage from './CommunityPage.jsx';
import AboutUs from './AboutUs.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/community-page" element={<CommunityPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
