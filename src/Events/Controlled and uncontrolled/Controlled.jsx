import React, { useState, useRef } from "react";

export const Controlled = () => {
  const [value, setValue] = useState();
  const inputRef = useRef();
  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  console.log(value);

  const submitHandler = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      {/* // Controlled: */}
      <input type="text" value={value} onChange={changeHandler} />
      <br />
      {/* // Uncontrolled: */}
      <input type="text" defaultValue="foo" ref={inputRef} />

      <button onClick={submitHandler}>Submit</button>
      {/* // Use `inputRef.current.value` to read the current value of <input> */}
    </div>
  );
};
