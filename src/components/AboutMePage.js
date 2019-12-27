import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaSass, FaCss3 } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import ReduxIcon from "./ReduxIcon";

const AboutMePage = () => {
  const iconStyle = {
    margin: "0px 7px",
    minWidth: "3em"
  };
  const iconStyleReact = {
    margin: "0px 7px 0px 0px",
    minWidth: "3em"
  };
  const techIcons = [
    { IconComponent: FaReact, name: "react" },
    { IconComponent: ReduxIcon, name: "redux" },
    { IconComponent: FaHtml5, name: "html5" },
    { IconComponent: FaCss3, name: "css3" },
    { IconComponent: FaSass, name: "sass" },
    { IconComponent: FaNodeJs, name: "node" },
    { IconComponent: DiMongodb, name: "mongo" }
  ];
  return (
    <div
      className="container
     h-100 d-flex flex-column justify-content-around"
    >
      <p>
        I'm a poland-based Web Developer and IT and Telecommunications
        Technician, with strong interest for web development and networking,
        with special care in simplicity and efficiency.
      </p>
      <p>
        I've been in the IT Service industry for more than 6 years, in different
        countries and cultures, where I learned to participate and deliver in
        projects following the ITIL framework for quality management.
      </p>
      <p>
        Nowadays I spend most of my time developing in the most modern stack web
        technologies and frameworks, aiming to participate in creative projects
        that can affect people in positive ways.
      </p>
      <div className="tech-stack mb-3">
        <h4 className="mb-4">Tools</h4>
        <div className="tech-icons d-flex flex-row flex-sm-nowrap flex-wrap justify-content-start justify-content-md-between justify-content-lg-start">
          {techIcons.map(({ IconComponent, name }) => {
            return (
              <div className={`icon-container icon-${name}`} key={name}>
                <IconComponent
                  size="3em"
                  style={name === "react" ? iconStyleReact : iconStyle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
