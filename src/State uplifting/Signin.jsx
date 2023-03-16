import React, { useState } from "react";
import "./Signin.css";
import { Welcome } from "./Welcome";
import { Navigate } from "react-router-dom";

export const Signin = ({
  name,
  password,
  isLoggedin,
  setIsLoggedin,
  setName,
  setPassword,
}) => {
  const submitHandler = () => {
    if (!name || !password) {
      alert("Can't submit with Empty fields");
    } else {
      if (name === "rishabh" && password === "123456") {
        alert("successfully Logged in");
        setIsLoggedin(true);
      } else {
        alert("Invalid credentials");
      }
    }
  };

  console.log(isLoggedin);
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className="signin">
        <h4>Signin</h4>
        <input
          placeholder="UserName"
          value={name}
          onChange={nameHandler}
          type="text"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
          type="password"
        />
        <button onClick={submitHandler}>Login</button>
      </div>
    </div>
  );
};

{
  /* <h1>Signin</h1>
        <input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button onClick={submitHandler} type="submit">
          Signin
        </button> */
}

{
  /* {name && <p>Name: {name}</p>}
        {password && <p>Password: {password}</p>} */
}
