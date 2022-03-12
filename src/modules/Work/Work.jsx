import React from "react";
import "./Work.scss";
import cre from "../../assets/img/creditwave.jpg";

const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <h2>Featured works</h2>

        <div className="work__container">
          <div className="img">
            <img src={cre} alt="work_pic" />
          </div>
          <div className="content">
            <h3>Designing Creditwave</h3>
            <strong>Stacks: React, Redux, Sass</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a href="https://creditwaveng.com" rel="noreferrer">
              <span>view</span>
            </a>
            <a href="https://creditwaveng.com" rel="noreferrer">
              <i class="lni lni-github-original"></i>
            </a>
          </div>
        </div>
        <div className="work__container">
          <div className="img">
            <img src={cre} alt="work_pic" />
          </div>
          <div className="content">
            <h3>Designing Creditwave</h3>
            <strong>Stacks: React, Redux, Sass</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a href="https://creditwaveng.com" rel="noreferrer">
              <span>view</span>
            </a>
            <a href="https://creditwaveng.com" rel="noreferrer">
              <i class="lni lni-github-original"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
