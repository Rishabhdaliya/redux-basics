import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./Count.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/action";

export const Count = () => {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const decHandler = () => {
    if (count > 0) {
      debugger;
      dispatch(decrement(Number(value)));
    } else {
      alert("Can't go below 0");
    }
  };
  const incHandler = () => {
    dispatch(increment(Number(value)));
  };
  return (
    <div>
      <h1>Count</h1>
      <h2>{count}</h2>
      <div className="count__btn">
        <button onClick={decHandler}>-</button>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={incHandler}>+</button>
      </div>
    </div>
  );
};
