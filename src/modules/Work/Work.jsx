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
            <h3>Creditwave Web</h3>
            <strong>Stacks: React, Redux, Sass</strong>
            <p>
              Creditwave web is a web application built for desktop users so
              they can access Creditwave's services using a browser.
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
            <img
              src="https://www.ruingwe.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fy0xdnwwh%2Fproduction%2Fc0a2cda47206c68ca165ac41d0e95cbee389c38f-2000x1125.jpg&w=1080&q=75"
              alt="work_pic"
            />
          </div>
          <div className="content">
            <h3>Creditwave Admin Dashboard</h3>
            <strong>Stacks: React, Redux, Sass</strong>
            <p>
              Creditwave admin is a web application built for Creditwave’s staff
              so they can read, create, update and delete Creditwave’s data.
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
