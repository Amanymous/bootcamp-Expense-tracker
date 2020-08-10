import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';

import './App.css';

export function Child() {
  let { transactions } = useContext(TransactionContext);
  let [newDescription, setDescription] = useState('');
  let [newAmount, setAmount] = useState(0);
  // console.log(transactions);

  const handleAddition = (event) => {
    event.preventDefault();
    console.log(newAmount, newDescription);
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
        $300
      </h3>
      <div className="expense-cont">
        <h3>
          INCOME <br />
          $1000
        </h3>
        <h3>
          EXPENSE <br />
          $500
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
            type="text"
            onChange={(ev) => setDescription(ev.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
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
