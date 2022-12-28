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
      if (name === "athar" && password === "123456") {
        alert("successfully Logged in");
        setIsLoggedin(true);
      } else {
        alert("Invalid credentials");
      }
    }
  };
  if (isLoggedin) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <div className="signin">
        <h1>Signin</h1>
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
        </button>

        {name && <p>Name: {name}</p>}
        {password && <p>Password: {password}</p>}
      </div>
    </div>
  );
};
