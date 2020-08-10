import React, { useContext } from 'react';
import { TransactionContext } from './transContext';

import './App.css';

export function Child() {
  let { transactions } = useContext(TransactionContext);
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
            <li>
              <span>{transObj.description}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h3>Add New Transaction</h3>
      <form className="Transaction-form ">
        <label>
          Enter Description <br />
          <input type="text" required />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input type="number" required />
        </label>
        <br />
        <input type="submit" value="Add Your Transaction" />
      </form>
    </div>
  );
}
