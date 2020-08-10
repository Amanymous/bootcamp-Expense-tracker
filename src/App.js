import React from 'react';
import { Child } from './Child';
import './App.css';
import { TransactionProvider } from './transContext';

function App() {
  return (
    <TransactionProvider className="App">
      <Child />
    </TransactionProvider>
  );
}

export default App;
