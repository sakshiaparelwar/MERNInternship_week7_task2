import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar">
        <Link to="/" id="title">
          Travel<span>era</span>
        </Link>
        <ul className="nav_links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destinations</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
