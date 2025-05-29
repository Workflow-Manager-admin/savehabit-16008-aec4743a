import React, { useState } from 'react';
import './SavingsControls.css';

// PUBLIC_INTERFACE
function SavingsControls({ onAdd, onRemove }) {
  const [amount, setAmount] = useState('');

  // Try to parse as float, only positive values allowed
  const parsedAmount = parseFloat(amount);

  // PUBLIC_INTERFACE
  const handleAdd = () => {
    if (parsedAmount > 0) {
      onAdd(parsedAmount);
      setAmount('');
    }
  };

  // PUBLIC_INTERFACE
  const handleRemove = () => {
    if (parsedAmount > 0) {
      onRemove(parsedAmount);
      setAmount('');
    }
  };

  return (
    <div className="savings-controls">
      <input
        type="number"
        min="0.01"
        pattern="[0-9]*"
        inputMode="decimal"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="savings-controls__input"
        placeholder="Enter amount"
        aria-label="Amount"
      />
      <button
        className="savings-btn"
        onClick={handleAdd}
        disabled={!(parsedAmount > 0)}
        type="button"
      >
        + Add
      </button>
      <button
        className="savings-btn savings-btn--accent"
        onClick={handleRemove}
        disabled={!(parsedAmount > 0)}
        type="button"
      >
        – Remove
      </button>
    </div>
  );
}

export default SavingsControls;
