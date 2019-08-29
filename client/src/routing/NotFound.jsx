import React from "react";
import { Link } from "react-router-dom";


// display the 404 page if route error
const NotFound = () => (
  <div className="not-found page-wrapper nodash">
    <h2>
      <span>404 Error!</span> Please enter a valid search.
    </h2>
    <Link to="/">Go to Homepage and try again.</Link>
  </div>
);

export default NotFound;
