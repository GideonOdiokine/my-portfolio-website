import React, { useEffect } from "react";
import gidy from "../img/gidy.jpg";
import "../pages/styles/about.css";

function About() {
  useEffect(() => {
    document.title = "Gidi | About";
  }, []);

  return (
    <section className="about_area section_gap">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-5 md-img">
            <div className="about_img">
              <img className="" src={gidy} alt="about" />
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5">
            <div className="main_title text-left">
              <p className="top_text">
                About me <span></span>
              </p>
              <h2>
                Creative Frontend <br />
                Developer
              </h2>
              <p>
                Experienced Software Engineer with a demonstrated history of
                working in the information technology and services industry.
                Skilled in React, Redux, vue, Javascript.
              </p>

              <p>
                When not working on a project or thinking about programming, I'm
                most likely watching TV series on Netflix, playing tennis,
                sight-seeing, watching Manchester City play football, or
                spending time with family and friends{" "}
              </p>
              <a className="primary_btn" href="/">
                <span>
                  <Link
                    to="https://drive.google.com/file/d/18ZgLWOu6ED_AFwgvpbNr24O0I31MfGj_/view?usp=sharing"
                    download
                  >
                    Downdload CV
                  </Link>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
