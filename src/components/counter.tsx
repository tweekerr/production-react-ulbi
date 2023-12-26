import React, {useState} from 'react';
import classes from './counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.button} onClick={() => setCount(prev => prev - 1)}>-</button>
      <button className={classes.button} onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;