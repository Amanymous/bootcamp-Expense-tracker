import React, { useContext } from 'react';
import { counterContext } from './counterContext';

export const Child = (props) => {
  let counterValue = useContext(counterContext);
  console.log(counterValue);
  return (
    <div>
      <h2>This is First Child using counter Context {props.name}</h2>
      <h2>counter value is :{counterValue[0]}</h2>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Add context
      </button>
    </div>
  );
};
