import React from 'react';

const Legend = () => {
  return (
    <div className="legend">
      <h4>Map Legend</h4>
      <div><span className="legend-icon" style={{ backgroundColor: 'black' }}></span> YEAR ONE COUNTIES</div>
      <div><span className="legend-icon" style={{ backgroundColor: 'red' }}></span> TARGET LEARNERS</div>
      <div><span className="legend-icon" style={{ backgroundColor: 'blue' }}></span> LEARNERS TRAINED</div>
    </div>
  );
};

export default Legend;