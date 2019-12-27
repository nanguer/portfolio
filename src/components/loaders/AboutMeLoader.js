import React, { Suspense } from "react";

const AboutMePage = React.lazy(() => import("../AboutMePage"));

const AboutMeLoader = ({ navState }) => (
  <>
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <AboutMePage navState={navState} />
    </Suspense>
  </>
);
export default AboutMeLoader;
