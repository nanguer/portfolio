import React from "react";

const PortfolioItem = ({ work, ...props }) => {
  const { title, img, description } = work;
  return (
    <div className="portfolio-item d-flex align-items-start flex-column">
      <h2>{title}</h2>
      <img src={img} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default PortfolioItem;
