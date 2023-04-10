import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  decrementByAmount,
  decrementAsync,
  selectCount,
  reset,
  multiply,
  divide
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count.toFixed(2)}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() =>
            dispatch(decrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Minus Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(decrementAsync(Number(incrementAmount) || 0))}
        >
          Minus Async
        </button>
      </div>
      <div>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(multiply(Number(incrementAmount) || 0))}
        >
          Multiply By Amount
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(divide(Number(incrementAmount) || 0))
          }
        >
          Divide By Amount
        </button>
      </div>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}
