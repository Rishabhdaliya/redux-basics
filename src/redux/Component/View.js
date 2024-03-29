import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, clearCart } from "../action";

export const View = () => {
  const [value, setValue] = React.useState();

  const dispatch = useDispatch();
  const subHandler = () => {
    debugger;
    dispatch(decrement(Number(value)));
  };
  const addhandler = () => {
    debugger;
    dispatch(increment(Number(value)));
  };

  const clearhandler = () => {
    debugger;
    dispatch(clearCart());
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={subHandler}>-</button>

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="qty"
          style={{ width: "100px" }}
        />

        <button onClick={addhandler}>+</button>
      </div>

      <br />
      <button onClick={clearhandler}>Reset</button>
    </>
  );
};
