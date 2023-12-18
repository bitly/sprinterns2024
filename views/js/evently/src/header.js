import React from 'react';
import './header.css';
import {
  Link
} from "react-router-dom";


function Header() {
  return (
    <div className="Header">
      <h1 className="logo">Event.ly</h1>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="/create-event" className="nav-links">Create</Link>
          </li>
          <li>
            <Link to="/community-page" className="nav-links">Community</Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-links">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header