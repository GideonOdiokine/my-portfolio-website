import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import PATHS from "../../../config/constants/path";
import { navRoutes } from "../../../config/constants/navRoute";

const Navigation = () => {
  return (
    <header>
      <div className="container">
        <div className="flex">
          <div className="logo">
            <Link to={PATHS.HOME}>Gideon.</Link>
          </div>
          <nav>
            <ul>
              {navRoutes.map((route) => (
                <li>
                  <Link to={route.path}>{route.translation}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
