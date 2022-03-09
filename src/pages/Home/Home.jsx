import React from "react";
import Post from "../../modules/Post/Post";
import Showcase from "../../modules/Showcase/Showcase";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Post />
    </div>
  );
};

export default Home;
