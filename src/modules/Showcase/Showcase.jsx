import React from "react";
import { Link } from "react-router-dom";
import picture from "../../assets/img/gidy.png";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="flex">
          <div className="showcase__left">
            <h2>Hi, I am Gideon,</h2>
            <h2>Creative Frontend Developer.</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. <br /> Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat <br /> sunt nostrud amet.
            </p>
            <Link to="/">Download Resume</Link>
          </div>
          <div className="showcase__right">
            <img src={picture} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
