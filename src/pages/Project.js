import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sanityClient from "../client.js";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
      title,
      date,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      place,
      description,
      projectType,
      link,
      tags,
      view
    }`
      )
      .then((data) => {
        setProjectData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.title = "Gideon | Projects";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    document.title = "Gidi Portfolio";
  }, []);
  return (
    <section id="latest-project">
      <div class="overlay pt-120 pb-120">
        <div class="container wow fadeInUp">
          <div class="row justify-content-center text-center">
            <div class="col-lg-6">
              <div class="section-header">
                <h4 class="sub-title">Portfolios</h4>
                <h3 class="title">Latest Projects</h3>
              </div>
            </div>
          </div>
          {projectData?.map((project, index) => (
            <div
              className="single-item"
              data-aos={`${index === 0 ? "fade-up" : "fade-left"}`}
              key={index}
            >
              <div className="row d-flex justify-content-between">
                <div className="col-lg-7 col-md-7 d-flex align-items-center">
                  <div className="right-area mid">
                    <img src={project?.mainImage?.asset?.url} alt="project" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 d-flex align-items-center">
                  <div className="text-area">
                    <a
                      href={`${project.link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h2>{project.title}</h2>
                    </a>
                    <p>{project.description}</p>
                    {project?.tags?.map((tag) => (
                      <h5 className="mid"> {tag} </h5>
                    ))}

                  <div className="d-flex py-4">
                  {project.view && (
                      <a
                        href={`${project.view}`}
                        target="_blank"
                        rel="noreferrer"
                        class="cmnbtn-second"
                      >
                        view
                        <span class="btn-icon"></span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={`${project.link}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!projectData && <h4>Loading Projects....</h4>}
        </div>
      </div>
    </section>
  );
};

export default Project;
