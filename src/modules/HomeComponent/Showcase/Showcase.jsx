import React from "react";
import picture from "../../../assets/img/gidy.png";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="flex">
          <div className="showcase__left">
            <h2>Hi, I am Gideon,</h2>
            <h2>Creative Frontend Engineer.</h2>
            <p>
              I am a Frontend developer with a passion for web technologies. I
              write robust, clean,
              <br /> re-usable and maintainable code.
            </p>
            <a
              rel="noreferrer"
              href="https://docs.google.com/document/d/e/2PACX-1vTFGDJxSlY7rhzxn-4q3NUqrxVuyEi4nqh-NszE-rHg3BqPqpHDBEQ1IsouiwcN1h_jSIHXYALnmZC_/pub"
              target="_blank"
              data-text=" Résumé."
            >
              <span>D</span>
              <span>o</span>
              <span>w</span>
              <span>n</span>
              <span>l</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span> </span>
              <span>R</span>
              <span>é</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>é</span>
              <span>.</span>
            </a>
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
