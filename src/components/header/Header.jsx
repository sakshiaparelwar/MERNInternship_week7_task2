import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="navbar">
        <a href="/" id="title">
          Travel<span>era</span>
        </a>
        <ul className="nav_links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/destination">Destinations</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
