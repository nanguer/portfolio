import React from "react";
import { FaReact, FaNode, FaHtml5, FaSass, FaCss3 } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import ReduxIcon from "./ReduxIcon";

const AboutMePage = () => {
  const iconStyle = {
    margin: "0px 7px"
  };
  return (
    <div className="container mt-5">
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
      <div className="tech-stack">
        <h3>Technology stack</h3>
        <div className="tech-icons">
          <FaHtml5 size="3em" style={iconStyle} />
          <FaCss3 size="3em" style={iconStyle} />
          <FaSass size="3em" style={iconStyle} />
          <FaReact size="3em" style={iconStyle} />
          <ReduxIcon size="3em" style={iconStyle} />
          <FaNode size="3em" style={iconStyle} />
          <DiMongodb size="3em" style={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
