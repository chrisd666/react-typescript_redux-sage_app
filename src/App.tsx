import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

interface State {
  counter: number;
  isLogged: boolean;
}

export default function App() {
  const counter = useSelector((state: State) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(7))}>-</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
