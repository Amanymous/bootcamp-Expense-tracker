import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';

import './App.css';

export function Child() {
  let { transactions, addTransaction } = useContext(TransactionContext);
  let [newDescription, setDescription] = useState('');
  let [newAmount, setAmount] = useState(0);
  // console.log(transactions);

  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert('Enter value not 0');
      return false;
    }
    // console.log(newAmount, newDescription);
    addTransaction({
      amount: Number(newAmount),
      description: newDescription,
    });
    setDescription('');
    setAmount('');
  };
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };
  return (
    <div className="child">
      <h1>Expense Tracker By Aman Mirza</h1>
      <h2>
        For Source Code Follow Github Link.
        <a
          href="https://github.com/Amanymous/bootcamp-Expense-tracker"
          class="active"
        >
          Amanymous
        </a>
      </h2>
      <h3>
        Your Balance <br />
        {getIncome() + getExpense()}
      </h3>
      <div className="expense-cont">
        <h3>
          Income <br /> {getIncome()}{' '}
        </h3>
        <h3>
          Expense <br /> {getExpense()}
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transObj, index) => {
          return (
            <li key={index}>
              <span>{transObj.description}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h3>Add New Transaction</h3>
      <form className="Transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            value={newDescription}
            type="text"
            onChange={(ev) => setDescription(ev.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
            value={newAmount}
            type="number"
            onChange={(ev) => setAmount(ev.target.value)}
            required
          />
        </label>
        <br />
        <input type="submit" value="Add Your Transaction" />
      </form>
    </div>
  );
}
