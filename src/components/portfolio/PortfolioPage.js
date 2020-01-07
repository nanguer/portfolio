import React, { useState, useEffect } from "react";
import ItemLoader from "../loaders/ItemLoader";
import data from "../../data/data.json";

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    setWorks(works => works.concat(data));
  }, []);

  return (
    <div className="portfolio-list d-flex flex-wrap justify-content-around align-items-start">
      {works.map(work => (
        <ItemLoader key={work.id} work={work} />
      ))}
    </div>
  );
};

export default PortfolioPage;