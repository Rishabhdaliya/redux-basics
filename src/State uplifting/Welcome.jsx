import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Welcome = (props) => {
  const navigate = useNavigate();

  const logoutHandler = ({ isLoggedin, setIsLoggedin }) => {
    alert("successfully logged out");
    setIsLoggedin(false);
  };

  // if (!props.isLoggedin) {
  //   return <Navigate to="/home" />;
  // }

  return (
    <div>
      Welcome to home page {props.name}
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};
