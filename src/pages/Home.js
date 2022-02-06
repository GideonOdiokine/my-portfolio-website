import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/styles/home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    document.title = "Gidi Portfolio";
  }, []);
  return (
    <div>
      <div className="container ">
        <div className="detel" data-aos="fade-right">
          <h1>
            I am Gideon, a {""}
            <span>
              <Typewriter
                words={["Developer.", "Programmer.", "Coder"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h1>
          <h4>
          
            Gidy is a design-minded front-end developer based in Calabar,
            Nigeria.
          </h4>
          <p>
            This is my official Portfolio website to showcase all my works
            related to <br /> web development.
          </p>
          <Link to="https://drive.google.com/file/d/18ZgLWOu6ED_AFwgvpbNr24O0I31MfGj_/view?usp=sharing" download>Downdload CV</Link>
        </div>

        <div className="social">
          <a
            href="https://github.com/GideonOdiokine"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
