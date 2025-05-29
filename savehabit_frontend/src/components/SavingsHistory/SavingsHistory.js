import React from 'react';
import './SavingsHistory.css';

// PUBLIC_INTERFACE
function SavingsHistory({ history }) {
  return (
    <section>
      <div className="savings-section-title">
        Savings History
      </div>
      {history.length === 0 ? (
        <div className="savings-history__empty">No activity yet.</div>
      ) : (
        <ul className="savings-history__list">
          {history.map((item, idx) => (
            <li
              className={`savings-history__item savings-history__item--${item.type}`}
              key={idx}
            >
              <span>
                {item.type === 'add' ? 'Deposited' : 'Withdrew'}{' '}
                <strong>${item.amount.toFixed(2)}</strong>
              </span>
              <span className="savings-history__date">
                {new Date(item.date).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default SavingsHistory;
