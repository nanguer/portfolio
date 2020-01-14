import React from "react";
import { animateScroll } from "./Animations";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaAngleDown,
  FaAngleUp,
  FaPhone,
  FaCode
} from "react-icons/fa";

export default () => {
  const handleScroll = anchor => {
    animateScroll(anchor);
  };

  const contacSectionIcons = [
    {
      Icon: FaPhone,
      name: "phone",
      text: "+48 789397113",
      link: "tel:+48789397113"
    },
    {
      Icon: MdEmail,
      name: "email",
      text: "Reach me by email now!",
      link: "mailto:nngimenez1985@gmail.com"
    },
    {
      Icon: MdLocationOn,
      name: "location",
      text: "I live in Sopot, north of Poland"
    },
    { Icon: FaCode, name: "work", text: "Available for freelance hire" }
  ];

  const iconColor = "#5158bb";
  const iconSize = "3em";

  const socialIcons = [
    {
      Icon: FaInstagram,
      name: "instagram",
      link: "https://www.instagram.com/mescalitobcn/"
    },
    {
      Icon: FaLinkedinIn,
      name: "linkedIn",
      link:
        "https://www.linkedin.com/in/nahuel-nicolas-gimenez-plotegher-a467b028/"
    },
    { Icon: FaGithub, name: "github", link: "https://github.com/nanguer" }
  ];

  return (
    <div
      className="contact-container"
      style={{
        height: "200vh",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1rem"
      }}
    >
      <div className="contact-up" style={{ height: "50%", zIndex: "2" }}>
        <div className="container" style={{ padding: "30vh 4vw" }}>
          <h1 className="contact-title">Contact</h1>
          <p>
            Feel free to reach out to discuss ideas, projects, or anything !
          </p>
        </div>
        <div
          className="arrow-container d-inline-flex justify-content-end pr-md-5"
          onClick={() => handleScroll("#contact-down")}
        >
          <FaAngleDown size="2em" />
        </div>
      </div>
      <div
        className="container contact-down d-flex flex-column justify-content-between"
        id="contact-down"
        style={{ height: "50%" }}
      >
        <div
          className="arrow-up-contact justify-content-end d-inline-flex"
          onClick={() => handleScroll("#top")}
          style={{zIndex:"2"}}
        >
          <FaAngleUp size="2em" />
        </div>
        <div className="pt-4">
          <h3 className="contact-title">Contact Info</h3>
        </div>
        <div className="contact-sections d-flex flex-wrap">
          {contacSectionIcons.map(({ Icon, name, text, link }) => (
            <div
              key={name}
              className="col-12 col-md-6 text-center d-flex flex-column-reverse p-4"
            >
              <div style={{ padding: "1rem" }}>{text}</div>
              <div className="contact-links" style={{ zIndex: "2" }}>
                <a href={link}>
                  <Icon size={iconSize} color={iconColor} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-social-icons d-flex justify-content-center">
          {socialIcons.map(({ Icon, name, link }) => (
            <div
              key={name}
              className="pr-2"
              style={{ zIndex: "2", cursor: "pointer" }}
            >
              <a target="_blank" rel="noopener noreferrer" href={link}>
                <Icon key={name} size="1.5em" color="#fff" />
              </a>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
