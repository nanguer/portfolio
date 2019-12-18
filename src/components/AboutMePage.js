import React from "react";
import { FaReact, FaNode, FaHtml5, FaSass, FaCss3 } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import ReduxIcon from "./ReduxIcon";

const AboutMePage = () => {
  const iconStyle = {
    margin: "0px 7px"
  };
  const iconStyleReact = {
    margin: "0px 7px 0px 0px"
  };
  const techIcons = [
    { IconComponent: FaReact, name: "react" },
    { IconComponent: ReduxIcon, name: "redux" },
    { IconComponent: FaNode, name: "node" },
    { IconComponent: DiMongodb, name: "mongo" },
    { IconComponent: FaHtml5, name: "html" },
    { IconComponent: FaSass, name: "sass" },
    { IconComponent: FaCss3, name: "css" }
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
      <div className="tech-stack mb-3 w-50">
        <h3 className="mb-4">Technology stack</h3>
        <div className="tech-icons d-flex flex-row justify-content-between">
          {techIcons.map(({ IconComponent, name }) => {
            return (
              <IconComponent
                size="3em"
                key={name}
                style={name === "react" ? iconStyleReact : iconStyle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
