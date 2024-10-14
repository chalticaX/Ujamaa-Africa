import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'react-bootstrap'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Interactive Map</h1>
      <p>Explore various counties, statistics, and locations on our map.</p>
      <Link to="/map">
        <button className="start-button">Start Exploring the Map</button>
      </Link>
    </div>
  );
};

export default Home;