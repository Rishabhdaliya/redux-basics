import React, { useState } from "react";
import { increment, decrement } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
export const Counter = () => {
  const [val, setVal] = useState();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const onDecrementHandler = () => {
    debugger;
    dispatch(decrement(val));
  };

  const onIncrementHandler = () => {
    debugger;

    dispatch(increment(val));
  };

  console.log(count);

  return (
    <div>
      <p>Count: {count}</p>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={onDecrementHandler}>-</button>
      <button onClick={onIncrementHandler}>+</button>
    </div>
  );
};
