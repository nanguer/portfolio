import React from "react";

const AbsoluteWrapper = ({ children }) => {
  return (
    <div
      className="position-absolute w-100 h-100 pt-5 pb-4"
    >
      {children}
    </div>
  );
};

export default AbsoluteWrapper;
