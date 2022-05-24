import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

export default function CounterHooks(props) {
  const [count, setCount] = useState(props.initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button style={style} onClick={() => setCount((prevCount) => prevCount - 1)}>
        -
      </button>
      <span> {count} </span>
      <button style={style} onClick={() => setCount((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
}
