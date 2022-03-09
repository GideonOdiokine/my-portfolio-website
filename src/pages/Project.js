import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sanityClient from "../client.js";

const Project = () => {
  // const [projectData, setProjectData] = useState(null);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type=="project"]{
  //     title,
  //     date,
  //     mainImage{
  //       asset->{
  //         _id,
  //         url
  //       },
  //       alt
  //     },
  //     place,
  //     description,
  //     projectType,
  //     link,
  //     tags,
  //     view
  //   }`
  //     )
  //     .then((data) => {
  //       setProjectData(data);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   document.title = "Gideon | Projects";
  // }, []);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //   });

  //   document.title = "Gidi Portfolio";
  // }, []);
  return (
   <h2>Hello </h2>
  );
};

export default Project;
