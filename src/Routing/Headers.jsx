import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Headers = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/about-us"}>
          <p>About-us</p>
        </Link>
        <Link to={"/services"}>
          <p>Services</p>
        </Link>
        <Link to={"/contact-us"}>
          <p>Contact-us</p>
        </Link>
        <Link to={"/products"}>
          <p>Products</p>
        </Link>
      </div>
    </>
  );
};

export default Headers;
