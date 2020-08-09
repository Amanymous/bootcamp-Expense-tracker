import React from 'react';
import { Parent } from './Parent';
import './App.css';
import { counterContext } from './counterContext';

function App() {
  return (
    <counterContext.Provider value={12}>
      <div>
        <Parent name="aman" />
      </div>
    </counterContext.Provider>
  );
}

export default App;
