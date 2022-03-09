import React from "react";
import Post from "../../modules/HomeComponent/Post/Post";
import Showcase from "../../modules/HomeComponent/Showcase/Showcase";
import Work from "../../modules/Work/Work";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Post />
      <Work />
    </div>
  );
};

export default Home;
