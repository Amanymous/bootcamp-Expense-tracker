import React, { useContext } from 'react';
import { counterContext } from './counterContext';

export const Child = (props) => {
  let counterValue = useContext(counterContext);
  console.log(counterValue);
  return (
    <div>
      <h2>This is First Child {props.name}</h2>
      <h2>counter value is :{counterValue}</h2>
    </div>
  );
};
