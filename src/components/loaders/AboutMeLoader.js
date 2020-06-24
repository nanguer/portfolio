import React, { Suspense } from "react";
import {Spinner} from "../Spinner";

const AboutMePage = React.lazy(() => import("../AboutMe"));

const AboutMeLoader = ({ navState }) => (
  <>
    <Suspense fallback={<Spinner />}>
      <AboutMePage navState={navState} />
    </Suspense>
  </>
);
export default AboutMeLoader;
