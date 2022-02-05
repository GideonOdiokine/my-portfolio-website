import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">
            <h1>G.O</h1>
          </Link>
          <ul>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/project">PROJECTS</Link>
            </li>
            {/* <li>
              <Link to="/blog">BLOG</Link>
            </li> */}
            {/* <li>
              <Link to="/">HIRE ME</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
