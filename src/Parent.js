import React from 'react';
import { Child } from './Child';
import { Childs } from './Childs';

export const Parent = (props) => {
  return (
    <div>
      <Child name={props.name1} />
      <Childs name={props.name2} />
    </div>
  );
};
