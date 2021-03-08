import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Nav bar</h1>
      <ul className="list">
        <Link className="Links" to="/about">
          <li>About</li>
        </Link>
        <Link className="Links" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
