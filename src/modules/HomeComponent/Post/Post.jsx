import React from "react";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <div className="container">
        <h2>Recent posts </h2>
        <div className="card__container">
          <div className="card">
            <h3>Building my portfolio to showcase my work</h3>
            <div className="time">
              <time>12 Feb 2020</time> | <span>React, Sass.</span>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="card">
            <h3>Building my portfolio to showcase my work</h3>
            <div className="time">
              <time>12 Feb 2020</time> | <span>React, Sass.</span>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
