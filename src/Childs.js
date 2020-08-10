import React, { useReducer } from 'react';
import { CounterReducer } from './counterReducer';

export const Childs = (props) => {
  let [state, dispatch] = useReducer(CounterReducer, 0);
  console.log(state);
  return (
    <div>
      <h1>This is Counter Reducer {props.name}</h1>
      <h3>Value of reducer state is: {state}</h3>
      <button onClick={() => dispatch('INCREAMENT')}>Add Reducer</button>
    </div>
  );
};
