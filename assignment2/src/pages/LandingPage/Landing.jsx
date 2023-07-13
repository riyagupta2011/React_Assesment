import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username') || '';
    setUser(username);
  }, [location.search]);

  return (
    <div className="container">
      <header className="header">
        <h1>Rescue Ticket System</h1>
      </header>
      <div className="content">
        <div className="welcome-message">
          <h2>Good Morning, Rescuer!</h2>
          <h3>How are you doing today, {user}?</h3>
        </div>
        <nav className="navigation-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><Link to="/newticket">Create Ticket</Link></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Landing;
