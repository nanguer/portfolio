import React, { useEffect, useState } from "react";
import LinkIcons from "./LinkIcons";
import Flip from "react-reveal/Flip";

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
    <Flip top>
      <div
        className="portfolio-item d-flex align-items-center text-center flex-column col-6 col-lg-4"
        style={{ padding: "5vh 1vh", zIndex: "2" }}
      >
        <h2 style={{ color: "#fff" }}>{title}</h2>
        {id !== 8 ? imageSection : null}
        <p style={{ paddingTop: "10px" }}>{description}</p>
        {id !== 8 ? linkSection : null}
      </div>
    </Flip>
  );
};

export default PortfolioItem;
