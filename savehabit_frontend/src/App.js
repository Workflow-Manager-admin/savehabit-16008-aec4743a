import React from 'react';
import './App.css';
import './theme.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" role="img" aria-label="piggy bank">
                🐷
              </span>
              SaveHabit
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: 85 }}>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;