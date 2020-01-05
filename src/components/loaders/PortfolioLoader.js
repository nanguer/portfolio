import React, { Suspense } from "react";

const PortfolioPage = React.lazy(() => import("../portfolio/PortfolioPage"));

const PortfolioLoader = ({ navState }) => (
  <div>
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <PortfolioPage navState={navState} />
    </Suspense>
  </div>
);

export default PortfolioLoader;
