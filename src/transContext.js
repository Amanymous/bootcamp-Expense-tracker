import React,{ createContext } from 'react';

const initialTransactions = [
  
    { amount: -500, description: 'chocolate' },
    { amount: 90, description: 'food Tin' },
    { amount: 80, description: 'Potatos' },
  
]

export const TransactionContext = createContext(initialTransactions);