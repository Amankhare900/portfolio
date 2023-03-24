import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

//using the array object method for doing repetitive work
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shorts/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shorts/17290917-Exhlipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining task and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shorts/-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shorts/16955822-Maintaining-tasks-and-tracking-progress",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shorts/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>T{title}</h3>
              <div className="portfolio__item-cta"></div>
              <a href={github} target="_blank" className="btn" rel="noreferrer">
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                LiveDemo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
