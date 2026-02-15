import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="brand">YogaPlanet</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/poses">Poses</Link></li>
        <li><Link to="/pranayama">Pranayama</Link></li>
        <li><Link to="/meditation">Meditation</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
