import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-section">
      <h3>oops it's a dead end</h3>
      <Link to="/" className="back-home-btn">
        BACK HOME
      </Link>
    </section>
  );
}

export default Error;
