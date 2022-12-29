import React from "react";
import { useState } from "react";

export const Events = () => {
  const [name, setName] = useState();
  const [status, setStatus] = useState(false);

  const clickHandler = () => {
    console.log("button is clicked");
    setStatus(true);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      Events
      <br />
      {status && <div>Name: {name}</div>}
      <br />
      <input type="text" onChange={nameHandler} placeholder="Name" />
      <br />
      <button onClick={clickHandler}>Click me </button>
    </div>
  );
};
