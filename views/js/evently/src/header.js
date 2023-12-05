import React from 'react';
import logo from './bitly-logo.png';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="Bitly Logo" id="createLogo"></img>
      </div>
      <h1>Event.ly</h1>
    </div>
  );
}
export default Header