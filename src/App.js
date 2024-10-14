import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MapPage from './MapPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
