import React, { useEffect, useRef } from "react";
import { spinnerLoad } from "../components/Animations";
import { RotateSpinner, SwapSpinner } from "react-spinners-kit";

export const Spinner = () => {
  let spinnerRef = useRef(null);

  useEffect(() => {
    spinnerLoad(spinnerRef);
  }, []);
  return (
    <div ref={el => (spinnerRef = el)} className="spinner-centered">
      <RotateSpinner size={50} color="#5158bb" />
    </div>
  );
};

export const SpinnerItem = () => (
  <div className="spinner-item">
    <SwapSpinner size={30} />
  </div>
);
