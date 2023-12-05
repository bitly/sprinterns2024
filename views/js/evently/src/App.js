import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './HomePage.jsx'; 
import CreateEvent from './CreateEvent.jsx'; 
import CommunityPage from './CommunityPage.jsx';
import AboutUs from './AboutUs.jsx';
import Header from './header.js';
import ViewEvent from './ViewEvent.jsx'; 

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-event">Create</Link>
        </li>
        <li>
          <Link to="/community-page">Community</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
    <Header/>
    <Routes>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/community-page" element={<CommunityPage />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/view-event/:event_id" element={<ViewEvent />} />
    </Routes>
  </div>
  );
}

export default App;
