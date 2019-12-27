import React, { Suspense } from "react";

const Landing = React.lazy(() => import("../Landing"));

const LandingLoader = ({ navState }) => (
  <div>
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <Landing navState={navState} />
    </Suspense>
  </div>
);

export default LandingLoader;
