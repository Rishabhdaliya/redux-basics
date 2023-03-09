import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const ProductDetail = () => {
  const param = useParams();
  const location = useLocation();

  console.log(location.pathname);
  return <div>ProductDetail ID: {param.title}</div>;
};
