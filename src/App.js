import React, { useState } from 'react';
import { Parent } from './Parent';
import './App.css';
import { counterContext } from './counterContext';

function App() {
  // let [count, setCount] = useState(30);
  let countState = useState(0);
  return (
    <counterContext.Provider value={countState}>
      <div>
        <Parent name1="first child" name2="Second child" />
      </div>
    </counterContext.Provider>
  );
}

export default App;
