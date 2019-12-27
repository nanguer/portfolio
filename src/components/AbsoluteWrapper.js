import React from "react";

const AbsoluteWrapper = ({ children }) => {
  return (
    <div
      className="position-absolute w-100 h-100 mb-3 pt-4"
      style={{ paddingBottom: "15px" }}
    >
      {children}
    </div>
  );
};

export default AbsoluteWrapper;
