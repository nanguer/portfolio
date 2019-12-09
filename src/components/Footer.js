import React from "react";

export const Footer = () => {
  return (
    <div
      className="d-flex flex-row flex-wrap justify-content-center justify-content-md-between"
      style={{ margin: "0 1rem" }}
    >
      <div className="order-1 order-md-1 order-lg-0 justify-content-start footer__contact">
        <ul>
          <li>E: nahuelgimenez@gmail.com</li>
          <li>T: (+48) 798397113</li>
        </ul>
      </div>
      <div
        className="order-0 order-md-0 order-md-lg-1 footer__introduce justify-content-end align-self-end"
        style={{ marginBottom: "1rem" }}
      >
        <p className="text-md-right text-center">
          Hello, I'm <span className="dot">Nahuel Gimenez</span>, Fullstack
          developer based in Gdansk, Poland.
        </p>
      </div>
    </div>
  );
};
