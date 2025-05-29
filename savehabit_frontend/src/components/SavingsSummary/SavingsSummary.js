import React from 'react';
import './SavingsSummary.css';

// PUBLIC_INTERFACE
function SavingsSummary({ savings, goal, progress, goalReached }) {
  return (
    <section>
      <div className="savings-section-title">
        Your Piggy Bank
      </div>
      <div className="savings-summary__main">
        <span className="savings-summary__amount savings-app__highlight">${savings.toFixed(2)}</span>
        <span className="savings-summary__goal">
          {goal > 0 && (
            <span>
              / ${goal.toFixed(2)} goal
            </span>
          )}
        </span>
      </div>
      <div className="savings-goal-progress" title={`Progress: ${(progress * 100).toFixed(0)}%`}>
        <div
          className="savings-goal-progress-bar"
          style={{
            width: `${progress * 100}%`,
            background: goalReached ? 'var(--primary)' : 'var(--accent)'
          }}
        />
      </div>
      <div className="savings-summary__progress">
        {goal > 0
          ? goalReached
            ? <span className="savings-app__accent">Goal complete!</span>
            : <span>{(progress * 100).toFixed(0)}% toward your goal</span>
          : <span>No goal set</span>
        }
      </div>
    </section>
  );
}

export default SavingsSummary;
