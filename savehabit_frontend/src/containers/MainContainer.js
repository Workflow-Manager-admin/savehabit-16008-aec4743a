import React, { useState } from 'react';
import TabNavigation from '../components/TabNavigation/TabNavigation';
import SavingsSummary from '../components/SavingsSummary/SavingsSummary';
import SavingsControls from '../components/SavingsControls/SavingsControls';
import GoalSettings from '../components/GoalSettings/GoalSettings';
import MotivationalBanner from '../components/MotivationalBanner/MotivationalBanner';
import SavingsHistory from '../components/SavingsHistory/SavingsHistory';

import '../theme.css';

// PUBLIC_INTERFACE
function MainContainer() {
  /** MainContainer coordinates all app logic and screens for SaveHabit. */

  const [currentTab, setCurrentTab] = useState('main'); // 'main' or 'history'
  const [savings, setSavings] = useState(0);
  const [goal, setGoal] = useState(200); // Initial demo goal
  const [history, setHistory] = useState([]);
  const [motivation, setMotivation] = useState('Start your saving journey today!');

  // PUBLIC_INTERFACE
  const handleAdd = (amount) => {
    setSavings(prev => prev + amount);
    setHistory(prev => [
      {
        type: 'add',
        amount: amount,
        date: new Date().toISOString(),
      },
      ...prev
    ]);
    setMotivation('Great! Keep it up!');
  };

  // PUBLIC_INTERFACE
  const handleRemove = (amount) => {
    setSavings(prev => Math.max(0, prev - amount));
    setHistory(prev => [
      {
        type: 'remove',
        amount: amount,
        date: new Date().toISOString(),
      },
      ...prev
    ]);
    setMotivation("It's okay to use your savings mindfully!");
  };

  // PUBLIC_INTERFACE
  const handleSetGoal = (newGoal) => {
    setGoal(newGoal);
    setMotivation('Goal updated! Stay motivated!');
  };

  // PUBLIC_INTERFACE
  const handleTabChange = (tab) => setCurrentTab(tab);

  const progress = goal > 0 ? Math.min(1, savings / goal) : 0;
  const goalReached = goal > 0 && savings >= goal;

  return (
    <div className="savings-container">
      <TabNavigation value={currentTab} onChange={handleTabChange} />
      <MotivationalBanner
        motivation={motivation}
        goalReached={goalReached}
      />
      {currentTab === 'main' && (
        <>
          <SavingsSummary
            savings={savings}
            goal={goal}
            progress={progress}
            goalReached={goalReached}
          />
          <SavingsControls
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
          <GoalSettings
            goal={goal}
            onSetGoal={handleSetGoal}
          />
        </>
      )}
      {currentTab === 'history' && (
        <SavingsHistory history={history} />
      )}
    </div>
  );
}

export default MainContainer;
