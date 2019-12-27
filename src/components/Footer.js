import React, { useRef, useEffect } from "react";
import { handleFooterIn, handleFooterOut } from "../components/Animations";

export const Footer = ({ navState }) => {
  let contactLine1 = useRef(null);
  let contactLine2 = useRef(null);
  let contactLine3 = useRef(null);

  useEffect(() => {
    if (navState.Landing) {
      handleFooterIn([contactLine1, contactLine2, contactLine3]);
    }
    if (!navState.Landing) {
      handleFooterOut([contactLine3, contactLine2, contactLine1]);
    }
  }, [navState.Landing]);

  return (
    <div
      className="d-flex flex-row flex-wrap justify-content-center justify-content-md-between"
      style={{ margin: "0 1rem 1rem" }}
    >
      <div className="order-1 order-md-1 order-lg-0 justify-content-start footer__contact">
        <div ref={el => (contactLine1 = el)}>E: nahuelgimenez@gmail.com</div>
        <div ref={el => (contactLine2 = el)} className="ml-5">
          T: (+48) 789397113
        </div>
      </div>
      <div
        ref={el => (contactLine3 = el)}
        className="order-0 order-md-0 order-md-lg-1 footer__introduce justify-content-end align-self-end"
        style={{ marginBottom: "0.5rem" }}
      >
        <p className="text-md-right text-center">
          Hello, I'm <span className="dot">Nahuel Gimenez</span>, Fullstack
          developer based in Gdansk, Poland.
        </p>
      </div>
    </div>
  );
};
