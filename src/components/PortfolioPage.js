import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioPage = () => {
  const [works, setWorks] = useState({
    workItems: [
      {
        id: 1,
        title: "YelpCamp",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        img: "/assets/Images/Yelpcamp.png"
      },
      {
        id: 2,
        title: "Time Destroyer",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        img: "/assets/Images/Time_Destroyer.png"
      },
      {
        id: 3,
        title: "Personal Blog App",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        img: "/assets/Images/BlogApp.png"
      },
      {
        id: 4,
        title: "Movie App",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        img: "/assets/Images/movieApp.png"
      },
      {
        id: 5,
        title: "Indecision App",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        img: ""
      },
      {
        id: 6,
        title: "Expensify",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        img: ""
      },
      {
        id: 7,
        title: "ZMP",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        img: ""
      },
      {
        id: 8,
        title: "This Web",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: ""
      }
    ]
  });

  return (
    <div className="portfolio-list d-flex flex-wrap justify-content-around lign-items-start">
      {works.workItems.map(work => (
        <PortfolioItem key={work.id} work={work} />
      ))}
    </div>
  );
};

export default PortfolioPage;
