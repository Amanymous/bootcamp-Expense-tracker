import React, { createContext, useReducer } from 'react';
import { TransactionReducer } from './transReducer';

const initialTransactions = [
  { amount: -500, description: 'chocolate' },
  { amount: 90, description: 'food Tin' },
  { amount: 80, description: 'Potatos' },
];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
  function addTransaction(transObj) {
    dispatch({
      type: 'ADD TRANSACTION',
      payload: {
        amount: transObj.amount,
        description: transObj.description,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
