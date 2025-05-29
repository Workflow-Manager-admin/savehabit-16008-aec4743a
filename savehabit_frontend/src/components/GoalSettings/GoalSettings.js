import React, { useState } from 'react';
import './GoalSettings.css';

// PUBLIC_INTERFACE
function GoalSettings({ goal, onSetGoal }) {
  const [input, setInput] = useState(goal);

  // PUBLIC_INTERFACE
  const handleSubmit = e => {
    e.preventDefault();
    const parsed = parseFloat(input);
    if (parsed > 0) {
      onSetGoal(parsed);
    }
  };

  return (
    <form className="goal-settings" onSubmit={handleSubmit}>
      <label htmlFor="goal-input" className="goal-settings__label">
        Set Savings Goal:
      </label>
      <input
        id="goal-input"
        type="number"
        step="0.01"
        min="1"
        className="goal-settings__input"
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Set goal"
      />
      <button className="savings-btn" type="submit">
        Set Goal
      </button>
    </form>
  );
}

export default GoalSettings;
