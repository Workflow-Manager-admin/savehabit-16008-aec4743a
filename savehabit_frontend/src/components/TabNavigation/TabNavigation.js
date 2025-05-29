import React from 'react';
import './TabNavigation.css';

// PUBLIC_INTERFACE
function TabNavigation({ value, onChange }) {
  return (
    <div className="tab-nav">
      <button
        className={`tab-nav__btn${value === 'main' ? ' tab-nav__btn--active' : ''}`}
        onClick={() => onChange('main')}
        type="button"
        aria-current={value === 'main'}
      >
        Piggy Bank
      </button>
      <button
        className={`tab-nav__btn${value === 'history' ? ' tab-nav__btn--active' : ''}`}
        onClick={() => onChange('history')}
        type="button"
        aria-current={value === 'history'}
      >
        History
      </button>
    </div>
  );
}

export default TabNavigation;
