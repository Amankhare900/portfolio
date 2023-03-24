import React from "react";
import ME from "../../assets/me-about.jpg";
import { IoSchoolSharp } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoSchoolSharp className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article> */}

            <article className="about__card">
              <BsFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Hello my name is aman Deep Khare. currently I am pursuing B-tech
            from LNCT Bhopal specialized in Information Technology Branch. In
            these past 3.5 year of the B-tech I have acquire some Technological
            skill like Java, DataStructure, HTML, CSS, JavaScript, MERN Stack.
            But I have a keen Intrust in java, DataStructure and web-development
            also.
          </p>

          <a href="#contact" className="bt btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
