import React from 'react';
import './App.css';
import { Header } from './conponents/UI/header';
import { Balance } from './conponents/UI/balance';
import { IncomeExpenses } from './conponents/UI/IncomeExpense';
import { TransactionList } from './conponents/UI/TransactionList';
import { AddTransaction } from './conponents/UI/AddTransaction';
import { GlobalProvider } from './conponents/context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
