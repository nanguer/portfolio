import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioItem = ({ work }) => {
  const { title, img, description, link, github } = work;
  const linkIcons = [
    { Icon: FaExternalLinkAlt, name: "link", link, text: "Visit project" },
    {
      Icon: FaGithub,
      name: "github",
      link: github,
      text: "View code in Github"
    }
  ];

  return (
    <div
      className="portfolio-item d-flex align-items-center text-center flex-column col-12 col-md-6 col-sm-6"
      style={{ padding: "5vh 1vh" }}
    >
      <h2 style={{ color: "#fff" }}>{title}</h2>
      <img src={img} alt="" style={{ padding: "4vh 0" }} />
      <p>{description}</p>
      <div
        style={{ zIndex: "2" }}
        className="project-links d-flex flex-row justify-content-center"
      >
        {linkIcons.map(({ Icon, name, link, text }) => (
          <div key={name}>
            <div className={`project-links__icon-div-${name}`}>
              <a
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                href={link}
              >
                <Icon size="1.5em" />
              </a>
            </div>
            <div className={`tooltip-works-${name}`}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
