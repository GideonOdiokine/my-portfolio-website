import React from "react";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <div className="container">
        <h2>Recent posts </h2>
        <div className="card__container">
          <div className="card">
            <a
              href="https://dev.to/easybuoy/understanding-the-package-json-file-3fdg"
              target="__blank"
            >
              <h3>Understanding the package.json file</h3>
            </a>
            <div className="time">
              <time>12 Feb 2020</time> | <span>#node, #npm, #javascript</span>
            </div>
            <p>
              A package.json is a JSON file that exists at the root of a
              Javascript/Node project. It holds metadata relevant to the project
              and it is used for managing the project's dependencies, scripts,
              version and a whole lot more.
            </p>
          </div>
          <div className="card">
            <a href="http://gum.co/use-hooks" target="__blank">
              <h3>Understand how React Hooks work</h3>
            </a>
            <div className="time">
              <span>#react, #javascript.</span>
            </div>
            <p>
              React hooks are awesome, but they are not as easy to use as they
              sound. In my personal experience, with other developers, and in
              technical interviews, I realized that React developers often
              stuggle on the same problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
