import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tooltip from "react-tooltip-lite";

export default ({ link, github }) => {
  const tooltipProps = {
    padding: "5px",
    distance: 17,
    background: "#5158bb",
    color: "#fff",
    className: "tooltip-lite"
  };

  return (
    <div className="d-flex flex-row">
      <div className="project-links__icon-div-link">
        <Tooltip {...tooltipProps} content="Visit project" direction="left">
          <a
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            <FaExternalLinkAlt size="1.5em" />
          </a>
        </Tooltip>
      </div>
      <div className="project-links__icon-div-github">
        <Tooltip
          {...tooltipProps}
          content="View code in Github"
          direction="right"
        >
          <a
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            href={github}
          >
            <FaGithub size="1.5em" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};
