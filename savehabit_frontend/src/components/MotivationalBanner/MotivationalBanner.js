import React from 'react';
import './MotivationalBanner.css';

// PUBLIC_INTERFACE
function MotivationalBanner({ motivation, goalReached }) {
  return (
    <div className="motivation-banner">
      {goalReached
        ? <span className="savings-app__accent">🎉 Goal achieved! Celebrate your success! 🎉</span>
        : <span>{motivation}</span>
      }
    </div>
  );
}

export default MotivationalBanner;
