import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Sorry</h1>
      <p>
        Path not found. <Link to="/">Go home.</Link>
      </p>
    </div>
  );
}

export default NotFound;
