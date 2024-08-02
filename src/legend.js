import React from 'react';

const Legend = () => {
  return (
    <div className="legend">
      <h4>Map Legend</h4>
      <div><span className="legend-icon" style={{ backgroundColor: '#d76c27' }}></span> YEAR 2023 COUNTIES</div>
      <div><span className="legend-icon" style={{ backgroundColor: '#82462b' }}></span> YEAR 2024 COUNTIES</div>
      <div><span className="legend-icon" style={{ backgroundColor: '#999b37' }}></span> TARGET LEARNERS</div>
      <div><span className="legend-icon" style={{ backgroundColor: 'blue' }}></span> LEARNERS TRAINED</div>
    </div>
  );
};

export default Legend;