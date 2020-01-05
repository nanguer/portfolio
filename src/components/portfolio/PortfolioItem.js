import React from "react";
import LinkIcons from "./LinkIcons";

const PortfolioItem = ({ work }) => {
  const { title, img, description, link, github } = work;

  return (
    <div
      className="portfolio-item d-flex align-items-center text-center flex-column col-12 col-md-6 col-sm-6"
      style={{ padding: "5vh 1vh" }}
    >
      <h2 style={{ color: "#fff" }}>{title}</h2>
      <img
        className="img-thumbnail"
        src={img}
        alt=""
        style={{ padding: "4vh 0" }}
      />
      <p>{description}</p>
      <div
        style={{ zIndex: "2" }}
        className="project-links d-flex flex-row justify-content-center"
      >
        <LinkIcons link={link} github={github} />
      </div>
    </div>
  );
};

export default PortfolioItem;
