import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Skill's I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* FrontEnd start*/}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="'text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* FrontEnd End*/}

        {/* BackEnd start*/}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Mysql</h4>
                <small className="'text-light">Intermediate</small>
              </div>
            </article>
          </div>
          {/* BackEnd End*/}
        </div>
      </div>
    </section>
  );
};

export default Experience;
