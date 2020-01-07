import React from "react";
import LinkIcons from "./LinkIcons";

const PortfolioItem = ({ work }) => {
  const { title, img, description, link, github, id } = work;

  const linkSection = (
    <div
      style={{ zIndex: "2" }}
      className="project-links d-flex flex-row justify-content-center"
    >
      <LinkIcons link={link} github={github} />
    </div>
  );

  const imageSection = (
    <img
      className="img-thumbnail"
      src={img}
      alt=""
      style={{ padding: "4vh 0" }}
    />
  );

  return (
    <div
      className="portfolio-item d-flex align-items-center text-center flex-column col-6 col-lg-4"
      style={{ padding: "5vh 1vh" }}
    >
      <h2 style={{ color: "#fff" }}>{title}</h2>
      {id !== 8 ? imageSection : null}
      <p style={{ paddingTop: "10px" }}>{description}</p>
      {id !== 8 ? linkSection : null}
    </div>
  );
};

export default PortfolioItem;
