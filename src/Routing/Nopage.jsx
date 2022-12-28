import React from "react";
import { Link, useParams } from "react-router-dom";

export const Nopage = () => {
  const { id, title } = useParams();
  console.log(id, title);

  return (
    <div>
      <h1>404 page not found</h1>

      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};
