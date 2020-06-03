import React from 'react';
import './App.css';
import { ModalState } from './Modal';
import { Nested } from './Neste';

function App() {
  return (
    <ModalState>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
      <Nested />
    </ModalState>
  );
}

export default App;
